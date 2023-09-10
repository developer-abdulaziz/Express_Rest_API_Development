
const express = require('express');

const app = new express();
const router = require ('./src/routes/api.js')


app.use('/api/',router);

module.exports = app;