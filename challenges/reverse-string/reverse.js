const reverseString = (str) => {

  const reverse = [];
  str.split('').map((x) => reverse.unshift(x));
  return reverse.join('');

};

export default reverseString;
