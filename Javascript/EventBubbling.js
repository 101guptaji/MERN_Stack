let html = document.querySelector("html");
html.addEventListener('click', ()=>{
    console.log("HTML clicked");
});

let body = document.querySelector("body");
body.addEventListener('click', ()=>{
    console.log("Body clicked");
});

let div = document.querySelector("div");
div.addEventListener('click', ()=>{
    console.log("Div clicked");
});

let span = document.querySelector("span");
span.addEventListener('click', (e)=>{
    console.log("Span clicked");
    e.stopPropagation(); // if not called, all parent event will trigger on on trigeering of this event
});

let button = document.querySelector("button");
button.addEventListener('click', (e)=>{
    console.log("Button clicked");
    e.stopPropagation(); // to stop event propagate to parent
});