const { count } = require("console");
const { default: test } = require("node:test");

function getMax(num1,num2){
    if(num1>num2)
        return num1;
    else
        return num2;
    //(num1 > num2) ? num1 : num2;
}
console.log(getMax(10,20));



console.log();



function checkLandscape(width,height){
    return(width>height);
}
console.log(checkLandscape(1000,200));




console.log();

//fizzbuzz
//Divisable by 3 fizz
//Divisable by 5 buzz
//Divisable by 3 and 5 fizbuzz
//Not Divisable by 3 or 5 output is input
//input is not a number => 'Not a number'

const output = fizzbuzz(98);
console.log(output);

function fizzbuzz(input){
    if(typeof input !== 'number')
        return NaN;

    if((input % 3 === 0)&&(input % 5 === 0))
        return 'fizzbuzz';

    if(input % 3 === 0)
        return 'fizz';

    if(input % 5 === 0)
        return 'buzz';

    return input;
}



console.log();


//Truthy and Falsy Values
//undefined , null , Nan , 0 , false 
//Above are falsy values

const array = [0 , null , undefined , '' , 2 , 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;

    for(let value of array)
        if(value)
            count++;

    return count;
}



console.log();



//showPrime


let limit = 100;

showPrimes(limit);

function showPrimes(limit){
    for(let number = 2 ; number <= limit ; number++)
        if(isPrime(number))
            console.log(number);
}
function isPrime(number){
    for(let factor = 2 ; factor < number ; factor++)
        if(number % factor === 0)
            return false;
    
    return true;
}


console.log();




//Object Equality
let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');

//constructor function
function Address(street , city , zipcode){
    this.street = street;
    this.city   = city;
    this.zipcode= zipcode;
}

// Function values are same
function areEqual(address1 , address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipcode === address2.zipcode;
}

// but not the object references are same, they reference to different memory locations
function areSame(address1 , address2){
    return address1 === address2;
}

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));

