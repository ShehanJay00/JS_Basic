//If else

let hour = 12;

if(hour < 12)
    console.log('Good Morning');
else if(hour >= 12 && hour <=15)
    console.log('Good Afternoon');
else
    console.log('Good Evening');



//Switch case
let role = 'Person';

switch(role){
    case 'guest':
        console.log('Guest Detected');
        break;

    case 'Moderator':
        console.log('Modertor Detected')
        break;

    default:
        console.log('Unknown User');
        break;
}


//Loops - for loop
for(let i = 0 ; i < 10 ; i++){
    console.log("Itteration ",i);
}

console.log();

for(let i = 0 ; i < 10 ; i++){
    if(i%2 !==0)
        console.log("Odd number ",i);
}


console.log();


//Loops - while loop
let k = 0;
while(k < 21){
    console.log(k);
k++;
}

console.log();

//Loops - do while loop
let j =13;
do{
    if(j%2 !== 0)console.log(j);
    j++;
}while(j<=5);


console.log();

//Loops - for in loops
const student ={
    name :'shehan',
    age  : '24',
}
for(let key in student)console.log(key,student[key]);


console.log();

//Loops - for of loops
const colors = ['blue','red','yellow','green'];
for(let color of colors)console.log(color);
