const startupDebugger=require("debug")('app:startup');
const dbDebugger = require("debug")('app:db');
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const config = require("config");
const courses = require("./routes/courses");
const home = require("./routes/home")
const logger = require("./MidModules/logger.js")
const app = express();
const Joi = require("joi");

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(logger);
app.use(helmet());
app.use('/api/courses', courses)
app.use('/', home)

//configuration

console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' +config.get('mail.host'));
console.log('Mail Password: ' +config.get('mail.password'));

if (app.get('env') === 'development'){
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled...');
}
//DB Work
dbDebugger('Connected to the database...');

//console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//console.log(`app: ${app.get('env')}`);
app.use(function(req, res, next){
    console.log('Authenticating...');
    next();
});

//PORT
const port = process.env.PORT || 3000;
const IP = process.env.IP;

app.listen(port, IP, () =>console.log(`Listening on port ${port} and IP ${IP}...`));

