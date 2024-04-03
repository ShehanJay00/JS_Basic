const person = {
    firstName : 'Shehan',
    lastName : 'Jayasooriya',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
}
person.fullName = 'Ashan Jayasooriya';

console.log(person);
console.log(person.fullName);
// in output [Getter/Setter] indicates that the property fullName has a getter and setter defined for it.



console.log();

// Try and Catch
const person_2 = {
    firstName : 'Shehan',
    lastName : 'Jayasooriya',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Fuck you , Please enter a String');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error("Enter the full name with first and last");
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
}
try{
person.fullName = '';
}
catch(e){
    alert(e);
};

console.log(person_2);
console.log(person_2.fullName);



console.log();


// Var type variables
function varType(){
    if(true){
        var color = 'red';
        let age = 20;
    }
    console.log(color);
    //console.log(age);
}
console.log(varType());


console.log();

console.log(sum([1,2,3,4,5,6,7,8,9,10]));
function sum(...items){                   //...items(rest operator) get values as an array, so in here array of array
    if(items.length === 1 && Array.isArray(items[0]))   //Get the First element of the ...items Array
                                   //Copy all the items by spread operator

    return items.reduce((a,b) => a + b);
}