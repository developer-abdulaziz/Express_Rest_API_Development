const express = require('express');

const helloController = require('../controllers/helloController');
const router = express.Router();


//This is my first get routing
router.get('/hello', helloController.Hello);