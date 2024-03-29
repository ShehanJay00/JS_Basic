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

