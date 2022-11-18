import { intersection } from './intersection.js';

describe('intersection: check the intersection between two arrays, return array of non duplicated intersection values in order to 1st array', () => {
  describe('intersection between two arrays', () => {
    it('should return intersection values exist in two arrays  ', () => {
      expect(intersection([1, 2, 3], [1, 2])).toEqual([1, 2]);
    });
    it('should return empty array when there is no intersection between the two arrays', () => {
      expect(intersection([4, 6, 2], [3, 7, 1])).toEqual([]);
    });
    it('should return non dublicated value of intersection values', () => {
      expect(intersection([5, 1, 5], [5, 0])).toEqual([5]);
    });
    it('should return intersection values in the order of first array', () => {
      expect(intersection([1, 3, 1, 4, 2], [1, 2, 3])).toEqual([1, 3, 2]);
    });
    it('should return intersection of strings ', () => {
      expect(intersection(['hello', 'World'], ['hello'])).toEqual(['hello']);
    });
    it('should return array of intersection value regardless of values types ', () => {
      expect(intersection([1, '1', true, null], [null])).toEqual([null]);
    });
  });
});

// ========================= testing error ========================

describe('intersection: Passing not array into the function will throw TypeError  ', () => {
  describe('check array testing errors', () => {
    it('should not pass direct number, it throw error ', () => {
      expect(() => intersection([1, 2, 3], 56)).toThrowError();
    });
    it('should not pass direct boolean value, it throw error', () => {
      expect(() => intersection(true, [2, 3])).toThrowError();
    });
    it('should not pass direct string value, it throw error', () => {
      expect(() => intersection('hi', [2, 3])).toThrowError();
    });
    it('should not pass not array entrees, it throw error', () => {
      expect(() => intersection('hi', 'bye')).toThrowError();
    });
    it('type of prameters not array will throw error', () => {
      expect(() => intersection(true, false)).toThrowError();
    });
  });
});
