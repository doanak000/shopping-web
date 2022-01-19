var express = require('express');
var productController = require("./productController");
var router = express.Router();

/* GET shop-details page. */
router.get('/', function(req, res, next) {
  res.redirect("/shop-details/product/619f522f86b9f5e644f9722c");
});


router.get('/product/:id', productController.getProduct);

// router.get('/product/619f522f86b9f5e644f9722c', productController.getFistProduct);

router.post('/rate', productController.rate);

router.get('/product/:id/ratings', productController.getRatings);

module.exports = router;
