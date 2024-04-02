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
