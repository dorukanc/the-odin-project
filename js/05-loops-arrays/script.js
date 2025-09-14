/*
function sumOfTripledEvens(arr){
    let sumOfEvens = 0
    for(let number of arr){
        if(number%2 === 0){
            number = number * 3;
            sumOfEvens += number
        }
    }
    return sumOfEvens;
}
*/

function sumOfTripledEvens(array){
    return array
    .filter((num) => num % 2 ===0) // filter evens
    .map((num) => num * 3) // triple evens
    .reduce((acc, curr) => acc + curr); // sum all evens
}


let test = [1,2,3,4,5,6,7,8,9,10]

console.log(sumOfTripledEvens(test));