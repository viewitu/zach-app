const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var uptime = os.uptime();

// console.log("Total Memory " + totalMemory);
// console.log("Free Memory "+ freeMemory);
// console.log("Uptime " + uptime);

// template string 
//ES6 / ES 2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);
console.log(`Total Uptime: ${uptime}`);
const fs = require("fs");

// const files = fs.readdirSync('./');


fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});