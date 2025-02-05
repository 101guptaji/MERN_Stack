/* Objective: Understand asynchronous JavaScript, promises, and async/await.

    Requirements:
        Create a promise that resolves after 2 seconds.
        Use then() method to handle promise resolution.
        Use async/await to fetch data from an API.
*/

// Promise example
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 2000);
});

promise.then((ans) => {
    console.log(ans); // Promise Resolved
})
.catch((err)=>{
    console.log(err);
});


// Async await example
async function fetchData() {

    const url = 'https://dummy-json.mock.beeceptor.com/todos'; //A sample Rest API to get a list of To Do tasks.
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error.message);
    }
}

fetchData();