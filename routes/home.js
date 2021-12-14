var express = require('express');
var router = express.Router();
const Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
  // Account.find({}, function(err, accounts){
  //   console.log(accounts)
  //     if(!err) res.json(accounts);
  //     res.status(400).json({error: 'ERROR!!!'});
  // });
});

module.exports = router;

