var express = require('express');
const views = require('../views/apiCodigos');

var router = express.Router();

router.post('/', views.codeVerifier); 

module.exports = router;
