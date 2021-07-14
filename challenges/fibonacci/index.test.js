const { fib } = require('./index');

describe('Test fib function', () => {

  it('fib(0) should return 0', () => {
    expect(fib(0)).toBe(0);
  });

  it('fib(1) should return 1', () => {
    expect(fib(1)).toBe(1);
  });

  it('fib(2) should return 1', () => {
    expect(fib(2)).toBe(1);
  });

  it('fib(6) should return 8', () => {
    expect(fib(6)).toBe(8);
  });

  it('fib(50) should return 12586269025', () => {
    expect(fib(50)).toBe(12586269025);
  });

});
