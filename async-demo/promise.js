const p = new Promise((resolve, reject)=>{
   //kick off async work
   // ...
   // Value or error
   setTimeout(()=>{
   //resolve(1);
   
   reject(new Error('message'));
}, 2000);
});

p
   .then(result => console.log("result", result))
   .catch(err => console.log('Error', err.message));