var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/sum', function(req, res, next) {
  var firstNum = req.body.firstNum;
  var secondNum = req.body.secondNum;

  var result = parseFloat(firstNum) + parseFloat(secondNum);

  res.send(result.toString());
});

module.exports = router;
