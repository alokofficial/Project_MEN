const mongoose = require('mongoose');

mongoose
.connect('mongodb://127.0.0.1:27017/project_scatch')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log(error);
    process.exit(1);
})

module.exports =  mongoose.connection;