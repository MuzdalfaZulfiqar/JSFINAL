// Question # 1

/*
Create a promise delay that resolves after a given number of milliseconds. Write a function waitAndLog that waits for the promise to resolve and then logs "Done!" to the console.
*/

function waitAndLog(time){
    let delay = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(); // wait for specified time and then resolve it
        }, time);
      });

      // once get resolve display done
    delay.then(()=>{
        console.log("Done")
    })
}

// waitAndLog(1000)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Question # 2

/*
Write a function fetchUserData that simulates fetching user data from an API. Use a promise to resolve with the user data after 2 seconds, and handle the resolved data with .then().
*/

async function fetchUserData(){
    // return a promise
    return new Promise((resolve, reject) => {
        // fetch user data it will return a promise
        fetch("https://api.github.com/users/1")
        // got the promsie now resolve it and make another promise to convert to json which will also return a promise
        .then(res => res.json())
        // now since got a promise we can resolve this hence returing a promise
        .then(data =>{
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    })
}

// got the promise and the data passed to resolve is being the parameter of then is console logged
fetchUserData().then(data => console.log(data));