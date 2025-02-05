
let url = "https://jsonplaceholder.typicode.com/users";

//Getting data from api
fetch(url)
.then((response) => {
    return response.json()
})
.then(json=> {
    console.log(json)
    for(let item in json){
        console.log(json[item].username)
        document.write(json[item].username+", ")
    }
})


//Posting data to api
// Your JSON data
const jsonObj = { name: 'Himanshu', email: 'him@gmail.com', username: 'himgupta1' };

fetch(url, {
    method: "Post",
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify(jsonObj)
})
.then(response=> response.json())
.then(json=> {
    console.log(json)
})
.catch(error => console.log("Error in Fetch: ",error));