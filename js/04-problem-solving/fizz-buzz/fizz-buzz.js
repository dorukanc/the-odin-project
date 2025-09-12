// take a numeric user input

let userInput = parseInt(prompt('Enter a numeric value:'));


// print fizz numeric values that's divide by 3
// print buzz numeric values that's divide by 5
// print fizzbuzz divide by both 3 and 5


// we need to print numbers till the given user input

for(let i=1; i<= userInput; i++){
	// if the remainder is 0 from 3 and 5 division
	// print fizzbuzz
	if(i%3 === 0 && i%5 === 0){
		console.log('fizzbuzz');
	}else if(i%3 === 0){
		console.log('fizz');
	}else if(i%5 === 0){
		console.log('buzz');
	}else{
		console.log(i);
	}

}

