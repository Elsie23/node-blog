var express = require('express');
var router = express.Router();
var name = require('./1.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: name });
});

module.exports = router;
