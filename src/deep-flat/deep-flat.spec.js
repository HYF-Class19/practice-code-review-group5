const flatten = require('./deep-flat');

describe('we-are-reducing-the-number-of-dimensions-of-an-array-to-a-lower-number', () => {
  test('one', () => {
    expect(flatten([0, 1, 2, [3, 4]])).toStrictEqual([0, 1, 2, 3, 4]);
  });
  test('two', () => {
    expect(
      flatten([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8, 9],
        [10, 11, 12, 13, 14, 15],
      ]),
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
  test('tree', () => {
    expect(flatten([1, , 3, ['a', , ['d', , 'e']]])).toStrictEqual([
      1,
      3,
      'a',
      'd',
      'e',
    ]);
  });
  test('four', () => {
    expect(
      flatten([
        [[1, [1.1]], 2, 3],
        [4, 6],
      ]),
    ).toStrictEqual([1, 1.1, 2, 3, 4, 6]);
  });
  test('five', () => {
    expect(flatten([1, 2, , 4, 5, , 8])).toStrictEqual([1, 2, 4, 5, 8]);
  });
});
