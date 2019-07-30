var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('index', { 
    title: 'Welcome to MicroTrain 1906', name: 'Chad Svastisalee CSM', username: 'username'});
  });

router.get('/logout', function(req, res){
  console.log(req.session);
  req.logout();
  console.log(req.session);
});
  
module.exports = router;