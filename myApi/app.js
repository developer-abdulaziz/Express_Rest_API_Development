
const express = require('express');

const app = new express();
const router = require ('./src/routes/api.js')


//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const hpp=require('hpp')
const cors=require('cors')
// const mongoose= require('mongoose');




//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
// app.use(mongoose())

// app.use(bodyParser.json());





//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);





//Routing
app.use('/api/',router);

//undefine route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail", data:"Not found"})
})

module.exports = app;