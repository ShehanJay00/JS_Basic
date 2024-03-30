//value copying
let x = 10;
let y = x;
console.log(x);
console.log(y);


console.log();


//referencig,address copying
let x_ref = {value:10};
let y_ref = x_ref;

x_ref.value = 20;
console.log(x_ref);
console.log(y_ref);


console.log();



//Two seperate copies
let number = 100;
function increase(number){
    number++;
}
increase(number);
console.log(number);


console.log();


//One copy
let obj = {
    value :100,
}

function increment(obj){
    obj.value++;
}
increment(obj);
console.log(obj);



