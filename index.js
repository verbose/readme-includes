var templates = require('path').join(__dirname, 'templates');
module.exports = require('fs').readdirSync(templates).map(function(filepath) {
  return require('path').resolve(templates, filepath);
});