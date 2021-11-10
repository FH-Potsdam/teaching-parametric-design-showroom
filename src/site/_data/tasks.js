const data = require('./_pages/data.json');

module.exports = function() {
  return Object.keys(data).map(id => {
     const task = {
      id,
      title: data[id].title,
      description: data[id].description,
      scripts: []
    };

    Object.keys(data[id].sketches).forEach(userName => {
      if (data[id].sketches[userName]['sketch.js']) {
        task.scripts.push(
          data[id].sketches[userName]['sketch.js']
        );
      }
    });

    return task; 
  });
};