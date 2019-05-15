const express = require('express');
const router  = express.Router();

const helloWorld = require('./helloWorld')

router.use('/',helloWorld);


module.exports = router;
