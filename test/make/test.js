
const assert = require('assert');
const make = require('../../make/index.js');

function sum(a, b) {
  return a + b;
};


describe('make', () => {
  it('test 1', () => {
    const check = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(check, 777);
  });

  it('test 2', () => {
    const check = make(15,34,5,6,8)(-3, 21)(-1)(sum);
    assert.deepEqual(check, 85);
  }); 

  it('test 3', () => {
    const check = make(15,34,5,6,sum);
    assert.deepEqual(check, 60);
  }); 

  it('test 4', () => {
    const check = make(1)(2)(3)(4)(10,sum);
    assert.deepEqual(check, 20);
  }); 
  it('test 5', () => {
    const check = make(0,sum);
    assert.deepEqual(check,0);
  });

  it('test 6', () => {
    const check = make(-1,-2,-2,2,sum);
    assert.deepEqual(check, -3);
  }); 

  it('test 7', () => {
    const check = make(1)(2)(3)(3)(4)(1)(1)(1)(-2)(-2)(-1.5,sum);
    assert.deepEqual(check, 10.5);
  }); 
});

