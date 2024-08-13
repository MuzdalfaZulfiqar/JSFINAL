
// Question # 1
// Create an object student with properties name, age, and subjects (which should be 
// an array of subject names). Write a function addSubject that adds a new subject to the subjects array.

let student = {
    name : "muzdalfa",
    age  :20,
    subjects : ["PF", "OOP"]
}

function addSubject(object, subject){
    object.subjects.push(subject)

}

addSubject(student, "Mathematics");
// console.log(student.subjects)   
// [ 'PF', 'OOP', 'Mathematics' ]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question # 2
//Write a function mergeObjects that takes two objects and returns a new object that combines the 
// properties of both. If a property exists in both objects, the value from the second object should be used.

function mergeObjects(object1, object2){
    let newObject = Object.assign(object1, object2)
    return newObject
}

let merge =  mergeObjects({name: "John", age: 25}, {age: 30, city: "New York"});
console.log(merge)  
// { name: 'John', age: 30, city: 'New York' }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
