
let heading = document.querySelector('h1');
console.log(getComputedStyle(heading).color); //rgb(255, 0, 0)

let button = document.querySelector('.btn');

//adding event using listener
button.addEventListener('click', ()=>{
    heading.classList.toggle('heading');

    // button.style.backgroundColor='red';
    button.style.cssText="background-color:red; border:none";
});

//default click event for buttons
button.onclick = function() {
    alert("Button clicked!");
};

// const clickEvent = new Event('click');
// button.dispatchEvent(clickEvent);

document.getElementById("myLink").addEventListener("click", function(event) {
    // console.log(event);
    event.preventDefault(); // Prevents the default link action
    event.stopPropagation(); // Stops the event from bubbling up or propagating to parent elements in the DOM.
    alert("Link clicked!");
});