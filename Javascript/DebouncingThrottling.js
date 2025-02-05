/*
    Debouncing is a technique in programming that helps improve the performance of web applications 
    by controlling the frequency at which time-consuming tasks are triggered. 
    If a task is triggered too often—like when a user types quickly or rapidly clicks a button, 
    it can lead to performance issues. 
    Debouncing provides a solution by limiting how frequently a function can be executed.

    Approach:
    The button is linked to an event listener that invokes the debounce function when the button is clicked.
    The debounce function takes two parameters: a function to be debounced and a delay in milliseconds.
    Inside the debounce function, a variable named debounceTimer is declared. This variable is crucial for executing the debounced function after a specified delay.
    When the button is clicked, the debounce function is called. If the button is clicked only once, the debounced function is scheduled to run after the specified delay.
    If the button is clicked again before the end of the delay, the initial delay is canceled using clearTimeout(debounceTimer).
    A new delay timer is initiated, effectively resetting the debounce process. This mechanism ensures that the debounced function is only executed after the user stops clicking the button for the specified delay duration.
    The core idea behind debouncing is to start with a timeout of 0.
    If the debounced function is called again within the delay period, the timer is reset to the specified delay.
    Ultimately, when the timeout occurs, the debounced function is executed. The process repeats for each call to the debounce function, effectively resetting the timer and introducing a delay for each invocation.
*/
let button = document.getElementById("debounce");

const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}


button.addEventListener('click', debounce( function() {
    alert("Hello\nNo matter how many times you" +
        " click the debounce button, I will get " +
        "executed once every 3 seconds!!")
}, 3000));


/*
    Throttling is a technique used to limit the number of times a function can be executed in a given time frame. 
    It’s extremely useful when dealing with performance-heavy operations, 
    such as resizing the window or scrolling events, where repeated triggers can lead to performance issues.
*/
function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Scroll event triggered!');
}, 1000));
