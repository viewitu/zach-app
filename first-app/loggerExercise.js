const eventEmitter = require("events");
const emitter = new eventEmitter();


//register a listener

emitter.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});


//raise the event

const log = require ('./logger');
log ('message');
// emitter.emit('messageLogged');

//Raise an event called logging

