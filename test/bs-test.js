'use strict';

const expect = require('chai').expect;

describe('smoke test', function(){
  it('should pass', function(){
    expect(false).to.equal(false);
  });

  it('should fail', function(){
    expect(true).to.equal(true);
  });
});
