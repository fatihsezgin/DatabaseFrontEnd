var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wait-detail', function(req,res,next){
  res.render('wait-detail');
});

router.get('/work-order', function(req,res,next){
  res.render('work-order');
});

router.get('/helper', function(req,res,next){
  res.render('helper');
});

router.get('/work-order-display', function(req,res,next){
  res.render('work-order-display');
});



module.exports = router;
