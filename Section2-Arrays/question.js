// Question # 1
// Given an array of numbers let numbers = [1, 2, 3, 4, 5], write a function
// doubleNumbers that returns a new array where each number is doubled.


function doubleNumbers(array){
    let newArray = array.map((element)=>{
        return element + element
    })
    
    return newArray
}
numbers = [1,2,3,4,5]
let double = doubleNumbers(numbers); // [2, 4, 6, 8, 10]
// console.log(double)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question # 2
// Write a function removeDuplicates that takes an array of strings as input and
// returns a new array without duplicate values. Use appropriate array methods to solve this.

function removeDuplicates(array){
    let newArray = [];
    let newIndex = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(!newArray.includes(element)){
            newArray[newIndex] = element;
            newIndex++;
        }     // if ends here
    } // for loop ends here

    return newArray
}


let remove =  removeDuplicates(["apple", "banana", "apple", "orange", "banana"]); 
console.log(remove)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++