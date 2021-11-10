require('dotenv').config();

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  userAgend: process.env.USER_AGEND,
  auth: process.env.AUTH_TOKEN
});

const https = require('https');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const tasks = require('./tasks.json');
const users = require('./users.json');
const data = require('../src/site/_data/_pages/data.json');
const userMap = {};
users.filter(u => u.key === process.env.UPDATE_GROUP).forEach((group, gi) => {
  group.users.forEach(u => {
    const user = {
      i: gi,
      key: group.key,
      term: group.term,
      start: group.start,
      time: group.time,
      anonymous: false
    };
    if (typeof u === 'string') {
      userMap[u.toLowerCase()] = user;
    } else {
      user.anonymous = true;
      userMap[u.name.toLowerCase()] = user;
    }
  });
});

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', err => {
        reject(err);
      });
    });
  });
};


octokit.rest.repos.listForks({
  owner: process.env.FORK_OWNER,
  repo: process.env.FORK_REPO,
}).then(forks => {
  return Promise.all(forks.data.filter(f => f.owner.login.toLowerCase() in userMap).map(f => {
    return Promise.all(tasks.map((t, ti) => {
      return octokit.rest.repos.getContent({
        owner: f.owner.login,
        repo: f.name,
        path: t.folder
      }).then(folderContents => {
        return Promise.all(folderContents.data.filter(file => t.files.includes(file.name.toLowerCase()) && file.type === 'file').map(async file => {
          const id = uuidv4();
          const pathEl = file.name.split('.');
          const fileExt = pathEl[pathEl.length - 1];
          const url = file.download_url;
          await download(url, process.env.OUTPUT_PATH + id + '.' + fileExt);
          return {
            id,
            file: file.name,
            task: ti,
            path: file.path,
            username: f.owner.login,
            url: 'https://www.github.com/' + f.owner.login + '/' + f.name + '/blob/main/' + file.path,
            ext: fileExt
          };
        }));
      }).catch(err => {
        if (err.status === 404 || err.status === 400) {
          console.log(ti, f.owner.login, 'missing');
          // does not exist, yet
        } else {
          console.log(err);
        }
        return null;
      });
    }));
  }));
}).then(sketches => {
  sketches.flat().flat().forEach(s => {
    if (s !== null) {
      if (!(tasks[s.task].id in data)) {
        data[tasks[s.task].id] = tasks[s.task];
        data[tasks[s.task].id]['sketches'] = {};
      }
      if (!(s.username in data[tasks[s.task].id]['sketches'])) {
        data[tasks[s.task].id]['sketches'][s.username] = {};
      }
      data[tasks[s.task].id]['sketches'][s.username][s.file] = s;
    }
  });
  fs.writeFileSync('../src/site/_data/_pages/data.json', JSON.stringify(data), 'utf8');
}).then(() => {
  console.log('done');
}).catch(err => {throw err;});