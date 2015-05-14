var fs = require('fs');
var path = require('path');
var verb = require('verb');
var async = require('async');
var extend = require('extend-shallow');
var relative = require('relative');
var mdu = require('markdown-utils');
var mm = require('micromatch');

/**
 * custom template type
 */

verb.create('item');
verb.items('templates/*.md');

/**
 * Data
 */

verb.data({templates: verb.views.items});
verb.data({
  twitter: {username: 'jonschlinkert'},
  github: {username: 'jonschlinkert'},
});

/**
 * Helpers
 */

verb.helper('pre', function (name) {
  return mdu.gfm('{%= include("' + name + '") %}', 'js');
});

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

verb.task('default', ['readme', 'docs']);

