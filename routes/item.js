const express = require("express");
const Item = require("../models/item");
const router = new express.Router();
const itemController = require('../controllers/itemController')
const PAGE_SIZE = 16;

//Get item:
//Get all Items:
router.get('/items', itemController.index)
//router.get('/item/:page',itemController.index_page)

module.exports = router;
