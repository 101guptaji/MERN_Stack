// Returns a EventEmitter class
const events = require('events');

// all event properties and methods are an instance of an EventEmitter object. 
// To be able to access these properties and methods, create an EventEmitter object
const eventEmitter = new events.EventEmitter();

//Create an event handler
function onClickHandler(){
    console.log("Button clicked");
}

//Register the event handler to an event
eventEmitter.on("click", onClickHandler);

//Fire the 'click' event
eventEmitter.emit('click');