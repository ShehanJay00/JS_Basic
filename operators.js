console.log(1 === 1);
console.log('1' === 1);
console.log('1' == 1);
console.log(true == 1);

console.log();

let age = 23;
let validity = (age > 18) ? 'yes you are' : "no you aren't" ;
console.log(validity);

console.log();

let userColor = undefined;
let defaultColor = 'Red';
let currentColor = userColor || defaultColor;
console.log(currentColor);

userColor = 'Blue'
currentColor = userColor || defaultColor;  //left most one is considering 
console.log(currentColor);

