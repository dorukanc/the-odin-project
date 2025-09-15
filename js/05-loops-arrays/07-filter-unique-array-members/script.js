function unique(arr) {
    let arrLen = arr.length;
    for(let i=0; i < arrLen; i++){
        for(let j=0; j < arrLen; j++){
            if(i != j && arr[i] === arr[j]){
            // remove the copie 
            arr.splice(j, 1);
            arrLen--; // update length
            j--; // update the current index
            }
        }
    }
    return arr;
}

// alternate solution from javascript.info

function uniquAlt(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
alert( uniquAlt(strings)); 