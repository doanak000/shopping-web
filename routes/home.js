var express = require('express');
var router = express.Router();
// const Account = require('../models/account');
const Account = require('../models/user');
const homeController = require('../controllers/homeController')
/* GET home page. */
router.get('/', homeController.index)

module.exports = router;

