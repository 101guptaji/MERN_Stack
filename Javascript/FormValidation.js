const form = document.querySelector('#myForm');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const msg = document.querySelector("#errorMessage");

form.addEventListener('submit', (event)=>{
    const nameValue = name.value.trim();
    // event.preventDefault();
    // console.log(nameValue);
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    if(nameValue === ""){
        event.preventDefault();
        msg.innerHTML = "Please enter a name";
        name.focus();
        return false; //to come out the function
    }

    if(!isNaN(nameValue) || nameValue.match(/^\d/)){ //if name is a number or starts with a number
        event.preventDefault();
        msg.innerHTML = "Please enter a valid name";
        name.focus();
        return false;
    }

    if(emailValue === ""){
        event.preventDefault();
        msg.innerHTML = "Please enter a email address";
        email.focus();
        return false; //to come out the function
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailValue.match(emailRegex)){
        event.preventDefault();
        msg.innerHTML = "Please enter a valid email address";
        email.focus();
        return false; //to come out the function
    }

    if(phoneValue === ""){
        event.preventDefault();
        msg.innerHTML = "Please enter a phone number";
        phone.focus();
        return false; //to come out the function
    }

    if(isNaN(phoneValue) || phoneValue.length != 10){
        event.preventDefault();
        msg.innerHTML = "Please enter a 10 digits phone number";
        phone.focus();
        return false; //to come out the function
    }

    if(passwordValue.length < 8){
        event.preventDefault();
        msg.innerHTML = "Password length can not be less than 8";
        password.focus();
        return false; //to come out the function
    }

    alert("Form submitted successfully");
});