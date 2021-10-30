import {maxNumber} from './index'

describe('max number', () => {
    
    describe('giving a empty array', () => {
        it('should return 0 for a empty array', () => {
            expect(maxNumber([])).toEqual(0);
        });
    });

    describe('given a array of number', () => {
        it('should expect and return max number', () => {
            expect(maxNumber([1,2,3])).toEqual(3);
        });
    });
});