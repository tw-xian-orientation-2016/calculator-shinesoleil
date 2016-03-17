var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendfile('public/html/index.html')
});

router.post('/sum', function(req, res, next) {
  var firstNum = req.body.firstNum;
  var secondNum = req.body.secondNum;

  var result = parseFloat(firstNum) + parseFloat(secondNum);

  console.log(result)
  res.send(result.toString());
});

router.post('/diff', function(req, res, next) {
  var firstNum = req.body.firstNum;
  var secondNum = req.body.secondNum;

  var result = parseFloat(firstNum) - parseFloat(secondNum);

  res.send(result.toString());
});

router.post('/product', function(req, res, next) {
  var firstNum = req.body.firstNum;
  var secondNum = req.body.secondNum;

  var result = parseFloat(firstNum) * parseFloat(secondNum);

  res.send(result.toString());
});

router.post('/quotient', function(req, res, next) {
  var firstNum = req.body.firstNum;
  var secondNum = req.body.secondNum;

  var result = parseFloat(firstNum) / parseFloat(secondNum);

  res.send(result.toString());
});


router.post('/minus', function(req, res, next) {
  var num = req.body.num;

  var result = -parseFloat(num);

  res.send(result.toString());
});

router.post('/percent', function(req, res, next) {
  var num = req.body.num;

  var result = parseFloat(num) / 100;

  res.send(result.toString());
});

module.exports = router;
