function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        // removes from it all values except those that are between a and b.
        if(!(a <= arr[i] && arr[i] <= b)){
            arr.splice(i,1); // remove item
            i--; // because we removed the item, also decrease counter
        }
    }
}

// test

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]