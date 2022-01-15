var express = require('express');
var productController = require("./productController");
var router = express.Router();

/* GET shop-details page. */
router.get('/', function(req, res, next) {
  res.render('../components/products/shop_details');
});

router.post('/rate', productController.rate);

router.get('/ratings', productController.getRatings);

module.exports = router;
