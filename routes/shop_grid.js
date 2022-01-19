var express = require('express');
var router = express.Router();

const shopgridController = require('../controllers/shopgridController')
/* GET shop-grid page. */
router.get('/:category', shopgridController.show_cate)
router.get('/', shopgridController.index)


module.exports = router;
