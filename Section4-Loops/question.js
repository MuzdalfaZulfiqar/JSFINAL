

// Question # 1
// Write a function sumOfNumbers that takes an array of numbers as input and returns the sum 
// of all numbers using a loop.
function sumOfNumbers(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum  = sum + element
    }
    return sum
}

let sum =  sumOfNumbers([10, 20, 30, 40]); // 100
// console.log(sum)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question # 2
// Write a function findLongestWord that takes an array of words and returns the longest
// word in the array using a loop.

function findLongestWord(array){
    // consider the first one as maximum 
    let max = array[0]
    array.forEach(element => {
        // if new elemets's length greater than orev store this as max
        if(element.length >  max.length ){
            max = element;
        }
    });

    return max
}

findLongestWord(["apple", "banana", "cherry", "blueberry"]); // "blueberry"
