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



console.log()

//Blog Post
let post = {
    title : 'title',
    body  : 'hellow hellow this is a blogpost',
    author: 'c',
    views : '1000',
    comment : [
        {author : 'shehan' , body : 'Nothing'},
        {author : 'Malinda' , body : 'Full'}
    ],
    isLive : true,
}
console.log(post)
console.log()
console.log(post.comment)

console.log()

let post_2 = new Post('This is Title' , 'This is Name' , 'This is Author')

function Post(title,body,author){
    this.title = title;
    this.body  = body;
    this.author=author;
    this.views = 0;
    this.comment = [];   //empty array
    this.isLive = false;
}
console.log(post_2)

console.log();


console.log('Array Excercises')
//Array Excercises
const numRange = arrayFromRange(1,100)
console.log(numRange);

function arrayFromRange(min ,max){
    const output = [];
    for(let i = min ; i <= max ; i++)
        output.push(i);
    return output
}

console.log()

const nums = [1,2,3,4,5,6,7,8,9,10];
const out = except(nums,[1,2,3,4]);
console.log(out);

function except(array,exceptValues){
    
    const output = [];

    for(let elements of array){

        if(!exceptValues.includes(elements))
            output.push(elements);
    }
    return output
}


console.log()


// Move Element in Array
const moveNums = [1,2,4,6,8,10];
const outputNum = move(moveNums ,1 , 2);
console.log(outputNum);

function move(array , index , offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error("Invalid Offset")
        return;
    }
    const output = [...array];    //Create a copy of Array
    const element = output.splice(index , 1)[0];   //[0]:accesses the first element of the array returned by the splice method.
    output.splice(position,0,element)
    return output;
};


console.log();
// Count Occurences
const occNumbers = [1,2,1,2,1,2,1,2,1,2,1,2,1,12,];
const countOcc = countOccurences(occNumbers,1);
console.log(countOcc);

function countOccurences(array , searchElement){
    // we use reduce function here

    return array.reduce((accumulator,current) =>{
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator,current,searchElement);
        return accumulator + occurence;  // this return is part of reduce method
    },0);
}
