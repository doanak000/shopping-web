const express = require("express");
const Item = require("../models/item");
const router = new express.Router();
const shopgridController = require('../controllers/shopgridController')
const shop_detailsController = require('../controllers/shopDetailController')
const PAGE_SIZE = 16;

//Get item:
//Get all Items:
router.get('/items', shopgridController.index)
//router.get('/item/:page',itemController.index_page)

module.exports = router;
