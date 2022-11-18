const flatten = require('./deep-flat');

describe('We are reducing the number of dimensions of an array to a lower number', () => {
  test('1', () => {
    expect(flatten([0, 1, 2, [3, 4]])).toStrictEqual([0, 1, 2, 3, 4]);
  });
  test('2', () => {
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
  test('3', () => {
    expect(flatten([1, , 3, ['a', , ['d', , 'e']]])).toStrictEqual([
      1,
      3,
      'a',
      'd',
      'e',
    ]);
  });
  test('4', () => {
    expect(
      flatten([
        [[1, [1.1]], 2, 3],
        [4, 5],
      ]),
    ).toStrictEqual([1, 1.1, 2, 3, 4, 5]);
  });
  test('5', () => {
    expect(flatten([1, 2, , 4, 5, , 8])).toStrictEqual([1, 2, 4, 5, 8]);
  });
});
