/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value,
 * and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */

export const intersection = (array, values) => {
  if (Array.isArray(array) === false || Array.isArray(values) === false) {
    throw new TypeError('array and values should be arrays');
  }
  // filter the copy of array to avoid side-effects
  let filteredArr = [...array].filter((value) => values.includes(value));

  // using filter and indexOf to remove repeated values
  filteredArr = filteredArr.filter(
    (element, index) => filteredArr.indexOf(element) === index,
  );
  return filteredArr;
};
