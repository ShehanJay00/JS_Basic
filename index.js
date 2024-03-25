console.log('Hello World in JS Browser');
console.log('node index.js to run in the Node environment');

let name  = 'shehan jayasooriya';
let age   = 20;
let isMarried = true;
let middleName = undefined;
let selectColor = null;

//Variables
console.log('Types of Variables');

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(middleName));
console.log(typeof(selectColor));

console.log();

//Objects
let person = {
    name : 'john',
    age  : 20,
}

//Dot Notatio and Bracket Notation to Access a object Property
console.log(person.name);
person.name = 'Mary';
console.log(person.name);

let changeAge = 'age';
person[changeAge] = 23;
console.log(person.age);


