const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose')

mongoose
.connect(`${config.get('MONGODB_URI')}/project_scatch`)
.then(() => {
    dbgr('Connected to MongoDB');
})
.catch((error) => {
    dbgr(error);
    process.exit(1);
})

module.exports =  mongoose.connection;