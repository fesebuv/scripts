function fib(limit) {
  const arr = [0, 1];
  const len = limit - 1;

  for(let i = 0; i < len; i++) {
    let { length } = arr;
    let curr = arr[length - 1];
    let prev = arr[length - 2];
    arr.push(curr + prev);
  }

  return arr.pop();
}

module.exports = {
  fib
};
