// Determine the factorial of a number
// e.g. fact(3); 3 * 2 * 1 = 6
//      fact(5); 5 * 4 * 3 * 2 * 1 = 120

const fact = (num) => {

  let tot = 1;
  let n = num;

  for (n; n > 0; n -= 1) {
    tot *= n;
  }

  return tot;

};

export default fact;
