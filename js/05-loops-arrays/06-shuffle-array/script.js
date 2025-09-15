// fisher yates aka knuth shuffle
function shuffle(array){

    let currentIndex = array.length;

    while(currentIndex != 0){

        // generate a random index.
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap currentIndex w/ RandomIndex
        [array[currentIndex], array[randomIndex]] =
        [array[randomIndex], array[currentIndex]];
    }
    
}

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]
alert(arr);

shuffle(arr);
alert(arr);
// arr = [2, 1, 3]

shuffle(arr);
alert(arr);
// arr = [3, 1, 2]
// ...