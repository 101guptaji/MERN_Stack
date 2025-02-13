// Contact : displays a form with input fields for name, email, and message.

import React from 'react';

const Contact = (props) => {
    return (
        <div style={{padding:'20px'}}>
            <h1>{props.heading}</h1>
            <form id="myForm">
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" id="name" placeholder="Your Name"
                        style={{width:'100%'}} required="" />
                </div>
                <div class="form-group">
                    <label>Email: </label>
                    <input type="email" name="email" id="email" placeholder="Your Email"
                        style={{width:'100%'}} required="" />
                </div>
                <div class="form-group">
                    <label>Message: </label>
                    <textarea name="message" id="message" placeholder="Message"
                        style={{width:'100%'}} required=""></textarea>
                </div>
                <div><button type="submit">Send Message</button></div>
            </form>
        </div>
    );

};

export default Contact;