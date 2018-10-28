var assert = require('assert');
var sumOfOther = require('../../sumOfOther/index.js');

describe('sumOfOther', () => {
  it('Test 1', () => {
    assert.equal(JSON.stringify(sumOfOther([2, 3, 4, 1])), JSON.stringify([8, 7, 6, 9]));
  });
  it('Test 2', () => {
    assert.equal(JSON.stringify(sumOfOther([0,1,2,3,4,5,6,7,8,9])), JSON.stringify([ 45, 44, 43, 42, 41, 40, 39, 38, 37, 36 ]));
  });
  it('Test 3', () => {
    assert.equal(JSON.stringify(sumOfOther([-6,1])), JSON.stringify([1,-6]));
  });
  it('Test 4', () => {
    assert.equal(JSON.stringify(sumOfOther([1])), JSON.stringify([0]));
  });
  it('Test 5', () => {
    assert.throws(sumOfOther, Error, "Invalid argument");
  });
  it('Test 6', () => {
    assert.equal(JSON.stringify(sumOfOther([])), JSON.stringify([]));
  });
});