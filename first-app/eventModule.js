const eventEmitter = require("events");
const emitter = new eventEmitter();


//register a listener

emitter.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});
//raise the event
// emitter.emit('messageLogged');
emitter.emit('messageLogged', {id: 1, url: 'http://'});


//Raise an event called logging

