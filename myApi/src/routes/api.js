const express = require('express');

const helloController = require('../controllers/helloController');
const router = express.Router();


//This is my first get routing
router.get('/hello-get', helloController.Hello_Get);
router.post('/hello-post', helloController.Hello_Post);


module.exports = router;