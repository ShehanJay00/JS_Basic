//OOP Concepts

const circle = {
    radius : 10,
    draw   : function(){
        console.log("draw method is called here.!");
    }
};
circle.draw();


console.log();


//Factory Functions
function createCircles(radius){
    return{
        radius,
        draw(){
            console.log("Draw function is Here");
        },
    }
};
const circle1 = createCircles(1);
console.log(circle1);

const circle2 = createCircles(10);
console.log(circle2);

circle2.draw();


console.log();


function Circle(radius){
    this.radius=radius;
    this.draw= function(){
        console.log("Hello Pascal Notation");
    };
}

const circle3 = new Circle(1);
console.log(circle);



console.log();

const circle_2 = {
    radius : 10,
    width : 5,
}

const another = Object.assign({} , circle_2);
console.log(another);

const another_1 = {...circle_2}
console.log(another_1);


console.log();


// Math Object
console.log(Math.random());


//Strings
console.log();

const message = "  This is my message  ";
const strObj = new String("Hello");

console.log(message.length);
console.log(message.trim());  //Remove the whitespace between commas and letters

const message_1 = "  This is my \n New message  ";
console.log(message_1);

console.log(message.split(' '));


console.log();

// Date object
const now = new Date();
console.log(now);
console.log(now.toISOString());
now.setFullYear(2022);
console.log(now);




