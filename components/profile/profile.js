var express = require('express');
var router = express.Router();
var authController = require("../auth/authController");


router.get('/', function(req, res, next) {
  res.render('../components/profile/profile');
});

router.get('/changepassword', function(req, res, next) {
  res.render('../components/profile/change_password');
});

router.put("/edit", authController.edit);

router.patch("/changepassword/edit", authController.changePassword);

module.exports = router;
