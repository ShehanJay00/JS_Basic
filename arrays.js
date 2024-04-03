const courses = [
    {id : 'a' , name : 'udemy'},
    {id : 'b' , name : 'cousera'},
]

//not suitable for find a reference type
console.log(courses.includes({id:'a',name:'udemy'}))



//use find()
const course = courses.find(function(course){
    return course.name === 'udemy';
})
console.log(course)



//Index
const courseIndex = courses.findIndex(function(courseIndex){
    return courseIndex.name === 'udemy';
})
console.log(courseIndex)


console.log()


//Arrow Functions
// Used for pass a function as a argument for a method

const course_2_Index = courses.findIndex((courseIndex) =>{
    return courseIndex.name === 'cousera';
});
console.log(course_2_Index)

const course_2 = courses.find(course => course.name === 'IBM')
console.log(course_2)


console.log()

// Iterating an Array
const nums = [1,2,3,4,5,6,7,8,9,10]

for (let n of nums)
    console.log(n)


nums.forEach(number => {
    console.log(number);
});

console.log()

// Num with ID
nums.forEach((number,index) => {
    console.log(number,index);
});


// Joining arrays
const msg = 'this is my message for join'
const parts = msg.split(' ')
console.log(parts)

const combined = parts.join('-')
console.log(combined)



// Array Sorting

const languages = [
    {id:1 ,name: 'javescript'},
    {id:2 ,name: 'Bnode'},
];

languages.sort(function(one,two){
    const nameOne = one.name.toUpperCase();
    const nameTwo = two.name.toUpperCase();

    if(nameOne < nameTwo) return -1
    if(nameOne > nameTwo) return 1
    return 0
});

console.log(languages);


console.log()


const nm = [1,2,3,4,5,-10]
const checkPositive = nm.every((value) => {return value >= 0} );
const atLeastOnePositive = nm.some((value) => {return value >= 0} );

console.log(checkPositive)
console.log(atLeastOnePositive)

console.log();

// Maping and array
const items = nm.map(value => ({key: value}));

const chaining = nm
                    .filter(n => n > 1)
                    .map(n => ({value :n}))
                    .filter(obj => obj.value >1)
                    .map(obj => obj.value);

console.log(chaining);                   