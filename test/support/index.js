'use strict';

var fs = require('fs');
var path = require('path');
var includes = require('../..');
var mdu = require('markdown-utils');
var _ = require('lodash');

var settings = {
  interpolate: /\{%=([\s\S]+?)%}/g,
  evaluate: /\{%([\s\S]+?)%}/g,
  escape: /\{%-([\s\S]+?)%}/g
};

// cache context
var data = {};

exports.render = function render(fp, context) {
  settings.imports = {};
  settings.imports.include = exports.render;
  settings.imports.mdu = mdu;

  fp = path.join(includes, fp + '.md');
  var str = fs.readFileSync(fp, 'utf8');
  data = _.merge(data, context);
  var res = _.template(str, settings)(data);
  return format(res);
};

exports.data = function data(fp) {
  return require(path.resolve('fixtures', fp));
};

exports.read = function read(fp) {
  return require(path.resolve('fixtures', fp));
};

function format(str) {
  str = str.split(/\n{2,}/).join('\n');
  // str = str.split('**\n').join('**\n\n');
  return str.replace(/^\s+/g, '');
}
