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


