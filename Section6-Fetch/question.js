// Question # 1
// Write a function fetchData that fetches data from a URL (use any public API) and logs the data to 
//the console. Use fetch and .then() to handle the asynchronous operation.

function fetchMethod() {
    fetch("https://jsonplaceholder.typicode.com/posts/1").
    then(res => res.json()).
    then(data => console.log(data)).
    catch(error => console.log(error))
}

fetchMethod()
/*
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Question # 2
async function awaitMethod(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data  = await response.json()
    console.log(data)
}

awaitMethod()