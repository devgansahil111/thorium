const array = [2,4,1,3,5]

function inv(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if( array[i] > array[j] )
            count++;
        }
    }
    return count;
}
console.log(inv(array));