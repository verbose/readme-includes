var fs = require('fs');
var path = require('path');
var verb = require('verb');
var relative = require('relative');
var mdu = require('markdown-utils');

/**
 * Helpers
 */

verb.helper('pre', function (name) {
  return mdu.pre('{%= include("' + name + '") %}', 'js');
});

/**
 * Data
 */

verb.data(generate('templates/'));

/**
 * Tasks
 */

verb.task('readme', function () {
  verb.src('.verb.md')
    .pipe(verb.dest('.'))
});

verb.task('docs', function () {
  verb.src(['docs/_templates/*.md'])
    .pipe(verb.dest('docs'))
});

/**
 * The following is used for testing/usability
 */

verb.data({username: 'jonschlinkert'});

verb.task('templates', function () {
  verb.src(['templates/github.md'])
    .pipe(verb.dest('actual'))
});

verb.task('templates', function () {
  verb.doc('test', {content: '{%= include("github", {username: "bar"}) %}'});
  verb.render('test', function (err, res) {
    console.log(res);
  });
});

verb.task('default', ['readme', 'docs']);

/**
 * Utility for generating the list of includes in `templates/`
 */

function generate(dir) {
  var files = fs.readdirSync(dir);
  var len = files.length, i = 0;
  var res = {templates: []};
  while (len--) {
    var name = files[i++];
    var fp = path.join(dir, name);
    if (fs.statSync(fp).isFile() && fp.slice(-3) === '.md') {
      res.templates.push({
        name: name.slice(0, name.length - 3),
        path: fp
      });
    }
  }
  return res;
}
