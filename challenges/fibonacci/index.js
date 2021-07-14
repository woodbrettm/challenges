// fib(0) = 0 and fib(1) = 1
const fib = (index) => {

  if (index === 0) return index;

  let prevNum = 0;
  let currNum = 1;

  for (let i = index; i > 1; i -= 1) {
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return currNum;

};

module.exports = {
  fib,
};
