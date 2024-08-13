// Question # 1
//Rewrite the following function using an arrow function:
// function multiply(a, b) {
//     return a * b;
// }

let multiply = (a, b)=>{
    return  a * b;
}

console.log(multiply(3,4))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question # 2
// Write an arrow function filterEvenNumbers that takes an array of numbers and
// returns an array of only the even numbers.

let filterEvenNumbers = (array)=>{
    let evenArray = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element%2==0){
            evenArray.push(element)
        }
    }

    return evenArray
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))
