const data = require('./_pages/data.json');

module.exports = function() {
  const scripts = [];
  Object.keys(data).map(id => {
    Object.keys(data[id].sketches).forEach(userName => {
      if (data[id].sketches[userName]['sketch.js']) {
        scripts.push(
          data[id].sketches[userName]['sketch.js']
        );
      }
    });
  });
  return scripts;
};