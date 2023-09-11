
const app = require('./app');


/*
const dontEnv = require('dotenv');
dontEnv.config({path:'./config.env'});

app.listen(process.env.RUNNING_PORT,function(){
    console.log('run....');
})
*/

app.listen(4000,function(){
    console.log('run.......');
})