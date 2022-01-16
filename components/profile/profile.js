var express = require('express');
var router = express.Router();
var authController = require("../auth/authController");


router.get('/', function(req, res, next) {
  res.render('../components/profile/profile');
});

router.put("/edit", authController.edit);

module.exports = router;
