import reverseString from './reverse';

describe('Test reverseString function', () => {

  it('Should reverse the string', () => {
    expect(reverseString('abcdefg')).toBe('gfedcba');
  });

});
