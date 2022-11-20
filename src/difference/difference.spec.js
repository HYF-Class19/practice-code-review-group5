import { difference } from './difference.js';

describe('filter the values of an array by another array ', () => {
describe('check the default value', () => {
    it('[ ],[ ] -> [ ]', () => {
    expect(difference([], [])).toEqual([]);
    });
    it('[3,4],[ ] -> [3,4 ]', () => {
    expect(difference([3, 4], [])).toEqual([3, 4]);
    });
    it('[ ],[3,4 ] -> [ ]', () => {
    expect(difference([], [3, 4])).toEqual([]);
    });
    it('[3, 4], [5, 3] -> [1]', () => {
    expect(difference([3, 4], [5, 3])).toEqual([4]);
    });
    it('[-1, -2], [-3, -4] -> [-1, -2]', () => {
    expect(difference([-1, -2], [-3, -4])).toEqual([-1, -2]);
    });
});
});