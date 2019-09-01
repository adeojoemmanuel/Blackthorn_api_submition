var expect  = require('chai').expect;
var request = require('request');
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('testing Api request', function() {
	describe('testing root route', function() {
		it('Root page content', function(done) {
		    request('https://hotelautomate.herokuapp.com/api/' , function(error, response, body) {
		        expect(body).to.equal('Hello World');
		        done();
		    });
		});
	});
});