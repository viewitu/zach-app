const mongoose = require("mongoose");
mongoose.connect('mogodb://localhost/playground')
    .then(() => console.log('Connected to  MongoDB...'))
    .catch(err => console.error('Could not Connect to MongoDB...',err));
    