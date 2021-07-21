import fact from './fact';

describe('Test fact function', () => {

  test('fact(0) should return 1', () => {
    expect(fact(0)).toBe(1);
  });

  test('fact(1) should return 1', () => {
    expect(fact(1)).toBe(1);
  });

  test('fact(2) should return 2', () => {
    expect(fact(2)).toBe(2);
  });

  test('fact(5) should return 120', () => {
    expect(fact(5)).toBe(120);
  });

});
