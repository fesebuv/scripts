const { expect } = require('chai');
const { fib, isPalindrome } = require('../src/');

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
