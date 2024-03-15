const merge = (collection_1:number[], collection_2:number[], collection_3:number[]): number[] => {

    const merged:number[] = []
    
    let i=0, j= collection_2.length-1, k=0;

    while(i<collection_1.length || j>=0 || k<collection_3.length) {
        let min:number = Math.min(
            collection_1[i] || Infinity,
            collection_2[j] || Infinity,
            collection_3[k] || Infinity
            );

        if (min === collection_1[i]) {
            merged.push(collection_1[i]);
            i++
        } else if (min === collection_2[j]){
            merged.push(collection_2[j]);
            j--
        } else {
            merged.push(collection_3[k]);
            k++
        }
    }
    
    return merged;
}

const collection_1:number[] = [1, 3, 5];
const collection_2:number[] = [6, 4, 2];
const collection_3:number[] = [7, 8, 9];

console.log(merge(collection_1,collection_2,collection_3));

export default merge;
