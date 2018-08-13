const { expect } = require('chai');
const { fib } = require('../src/');

describe('fibonacci test', function () {
  it('fib of 10', function () {
    expect(fib(10)).to.equal(55);
  });

  it('fib of 55', function (){
    expect(fib(55)).to.equal(139583862445);
  });

  it('fib of 90', function () {
    expect(fib(90)).to.equal(2880067194370816120);
  });
});
