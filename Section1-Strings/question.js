
// Question # 1
// Given a string let message = "Welcome to JavaScript Programming!",
// write a function extractFirstWord that returns the first word of the string.
function extractFirstWord(word){
    let array = word.split(" ")
    return array[0]
}

let message = "Welcome to the code world"
// console.log(extractFirstWord(message))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question # 2
// Write a function maskEmail that takes an email string as input
// and masks it, showing only the first letter of the username and the domain, e.g., j*****@gmail.com.

function maskEmail(email){
    let masked = "";
    let value = email.indexOf("@")
    
    for (let index = 0; index < email.length; index++) {
        let element = email[index];
        if(index>=1 && index <value){
            element = "*"
        }
        masked = masked + element
        
    }
    return
}
console.log(maskEmail("john.doe@gmail.com"));