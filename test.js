/*!
 * verb-readme-includes <https://github.com/assemble/verb-readme-includes>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
require('should');
var verbReadmeIncludes = require('./');

describe('verbReadmeIncludes', function () {
  it('should equal', function () {
    verbReadmeIncludes({a: 'b'}).should.eql({a: 'b'});
    verbReadmeIncludes('abc').should.equal('abc');
  });

  it('should have property.', function () {
    verbReadmeIncludes({a: 'b'}).should.have.property('a', 'b');
  });
});