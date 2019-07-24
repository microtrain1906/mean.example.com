var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Chad Svastisalee CSM', username: 'username'});

});

module.exports = router;
