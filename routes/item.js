const express = require("express");
const Item = require("../models/item");
const router = new express.Router();
const shopgridController = require('../controllers/shopgridController')
const PAGE_SIZE = 16;

//Get item:
//Get all Items:
router.get('/products', shopgridController.index)

module.exports = router;
