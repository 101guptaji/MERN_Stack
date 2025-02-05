let divTag = document.querySelector("div");

divTag.addEventListener('click', (event)=>{
    if(event.target.tagName == "BUTTON"){ //tagName i.e. BUTTON should be in uppercase
        console.log(event.target.id+" clicked");
    
    }
    if(event.target.tagName == "P"){
        console.log(event.target.innerText+" clicked");
    }
})