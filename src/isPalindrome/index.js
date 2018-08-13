
function trimArr(arr) {
  return arr
    .map((letter) => letter.toLowerCase())
    .filter((letter) => letter !== ' ');
}

function isPalindrome(str) {
  const strArr = trimArr(str.split(''));
  const reverseArr = trimArr(str.split('')).reverse();
  return strArr.join('') === reverseArr.join('');
}

module.exports = {
  isPalindrome
}
