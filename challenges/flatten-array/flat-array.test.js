import flattenArray from './flat-array';

describe('Test Flattened Array', () => {

  const testArrayInput = [
    1, 2, 3,
    [15, [7, 8, 9, 10], 16, 18, 29],
    [[[[1]]]], [1, 2, 3, 4, [5, [[[6]]]]],
    'Hello', [['Hi']],
  ];

  const testArrayOutput = [
    1, 2, 3, 15, 7, 8, 9, 10, 16, 18, 29,
    1, 1, 2, 3, 4, 5, 6, 'Hello', 'Hi',
  ];

  it('Should flatten complex arrays', () => {
    expect(flattenArray(testArrayInput)).toStrictEqual(testArrayOutput);
  });

});
