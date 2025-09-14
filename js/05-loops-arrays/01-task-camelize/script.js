function camelize(str){
    
    const splitStr = str.split('-'); // remove dashes
    // console.log(splitStr)
    // make the first word all lowercase just in case
    splitStr[0] = splitStr[0].toLowerCase();

    // after first dash
    // make the first char uppercase
    for(let i=1; i < splitStr.length; i++){
        // select first char, uppercase, and concate w/ lowercase rest
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase(); 
    }
    // put all of them together and return
    return splitStr.reduce((concate, currentItem) => concate + currentItem);

}


console.log(camelize("background-coLor-hello-world")); // test 