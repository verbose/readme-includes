var path = require('path');
var glob = require('globule');

// Specify the directory to search
var files = module.exports = (function () {
  var dir = path.join(__dirname, 'templates/**').replace(/\\/g, '/');

  // Return array of expanded filepaths.
  return require('globule').find(dir, {
    filter: 'isFile'
  });
})();