var express = require('express');
var router = express.Router();

console.log("nhuuuuuuu")
/* GET shop-grid page. */
router.get('/nhu', function(req, res, next) {
  console.log("11111111111111111111111")
  res.render('home');
});
router.get('/', function(req, res, next) {
  res.render('shop_grid');
});


module.exports = router;
