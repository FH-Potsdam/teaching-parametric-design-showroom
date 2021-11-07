require('dotenv').config();

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  userAgend: process.env.USER_AGEND,
  auth: process.env.AUTH_TOKEN
});

const https = require('https');
const fs = require('fs');
const ncp = require('ncp').ncp;

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

const sketchTemplate = fs.readFileSync('./templates/sketch.html', 'utf8');
const overviewTemplate = fs.readFileSync('./templates/overview.html', 'utf8');
ncp('./templates/assets', './output/assets', err => {
  if (err) {
    return console.error({f, err});
  }
});

octokit.rest.repos.listForks({
  owner: process.env.FORK_OWNER,
  repo: process.env.FORK_REPO,
}).then(forks => {
  return Promise.all(forks.data.map(f => {
    return octokit.rest.repos.getContent({
      owner: f.owner.login,
      repo: f.name,
      path: 'code/task-01/sketch.js'
    }).then(contents => {
      const url = contents.data.download_url;
      return download(url, './output/sketch_' + f.owner.login + '.js')
    }).then(() => {
      const tempTemplate = sketchTemplate;
      fs.writeFileSync('./output/sketch_' + f.owner.login + '.html', tempTemplate.replace('$$$$PLACEHOLDER$$$$', 'sketch_' + f.owner.login + '.js'), 'utf8');
      return [f.owner.login, 'https://www.github.com/' + f.owner.login + '/' + f.name + '/blob/main/code/task-01/sketch.js'];
    }).catch(err => {
      if (err.status === 404) {
        // does not exist, yet
      } else {
        console.log(err);
      }
    });
  }));
}).then(owners => {
  fs.writeFileSync('./output/overview.html', overviewTemplate.replace('$$$$PLACEHOLDER$$$$', owners.filter(o => o ? true : false).map(o => {
    return `<div><iframe frameBorder="0" src="sketch_${o[0]}.html"></iframe><a href="${o[1]}">${o[0]}</a></div>`;
  }).join('')), 'utf8');
}).catch(err => {throw err;});