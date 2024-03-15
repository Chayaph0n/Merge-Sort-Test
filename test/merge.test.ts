import merge from '../src/merge';

describe('merge function', () => {
    it('should merge three sorted arrays', () => {
        const collection1:number[] = [1, 3, 5, 7];
        const collection2:number[] = [8, 6, 4, 2];
        const collection3:number[] = [9, 10, 11, 12];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });

    it('should merge empty arrays', () => {
        const collection1:number[] = [];
        const collection2:number[] = [];
        const collection3:number[] = [];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([]);
    });
    
    it('should handle duplicates correctly', () => {
        const collection1:number[] = [1, 1, 3, 5, 7];
        const collection2:number[] = [8, 6, 4, 2, 2];
        const collection3:number[] = [9, 10, 10, 11, 12];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12]);
    });
    
    it('should handle arrays of different sizes correctly', () => {
        const collection1:number[] = [1, 3, 5];
        const collection2:number[] = [8, 6];
        const collection3:number[] = [9, 10, 11, 12];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 3, 5, 6, 8, 9, 10, 11, 12]);
    });
    
    it('should handle arrays of negative correctly', () => {
        const collection1:number[] = [-5, -3, -1];
        const collection2:number[] = [-2, -4, -6];
        const collection3:number[] = [-9, -8, -7];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1]);
    });
});
