var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  if(req.body.codigo == "54544028130") {
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
});

module.exports = router;
