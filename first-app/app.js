const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

const log =require("./logger");

// console.log(logger);
log('message');
function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Zach');

