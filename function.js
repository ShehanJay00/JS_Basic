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