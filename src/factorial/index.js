function factorial(num) {
  let counter = 1;
  for(let i = 1; i <= num; i++) {
    counter = counter * i;
  }
  return counter;
}

module.exports = {
  factorial
};
