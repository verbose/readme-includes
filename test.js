/*!
 * verb-readme-includes <https://github.com/assemble/verb-readme-includes>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var includes = require('./');

describe('includes', function () {
  it('should equal', function () {
    includes({a: 'b'}).should.eql({a: 'b'});
    includes('abc').should.equal('abc');
  });

  it('should have property.', function () {
    includes({a: 'b'}).should.have.property('a', 'b');
  });
});