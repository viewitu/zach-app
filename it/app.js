const express = require("express");
const app = express();


app.get('/', (req,res)=>{
   res.send('') 
});

app.listen('3000',  () =>{
    console.log('this is a test');
    
})