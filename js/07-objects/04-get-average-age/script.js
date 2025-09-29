let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

// function getAverageAge(arr){
//     let totalAge = 0
//     arr.map(item => totalAge += item.age);
//     return (totalAge / arr.length);
// }

// alternative sol
function getAverageAge(users){
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(arr));

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
