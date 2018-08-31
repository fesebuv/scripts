const { expect } = require('chai');
const { factorial, fib, isPalindrome, tally } = require('../src/');

describe('fibonacci test', function () {
  const fibNums = {
    10: 55,
    55: 139583862445,
    90: 2880067194370816120
  };

  Object.keys(fibNums).forEach(function (key) {
    it(`fib of ${key}`, function () {
      expect(fib(key)).to.equal(fibNums[key]);
    });
  });
});


describe('isPalindrome', function () {
  const palindromes = [
    'madam',
    'Racecar',
    'Animal loots foliated detail of stool lamina',
    'Red root put up to order'
  ];

  palindromes.forEach(function (str) {
    it(`is "${str}" a palindrome?`, function () {
      expect(isPalindrome(str)).to.be.true;
    });
  });

  it('its "potato" a palindrome?', function () {
    expect(isPalindrome('potato')).to.be.false;
  });
});

describe('factorial', function () {
  it('0!', function () {
    expect(factorial(0)).to.equal(1);
  });

  it('1!', function () {
    expect(factorial(1)).to.equal(1);
  });

  it('5!', function () {
    expect(factorial(5)).to.equal(120);
  });

  it('10!', function () {
    expect(factorial(10)).to.equal(3628800);
  });

  it('12!', function () {
    expect(factorial(12)).to.equal(479001600);
  });

});

describe('tally', function () {
  const results = {
    'dbbaCEDbdAacCEAadcB': { b:2, d:2, a:1, c:0, e:-2 },
    'EbAAdbBEaBaaBBdAccbeebaec': { c:3, d:2, a:1, e:1, b:0 }
  }

  Object.keys(results).forEach((key) => {
    it(`should return ordered tally for ${key}`, function () {
      expect(tally(key)).to.deep.equal(results[key]);
    });
  });

})
