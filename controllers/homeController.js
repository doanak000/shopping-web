const {MultiMongoosetoObject} = require('../ulti/mongoose')
const User = require('../models/User')

class HomeController{
    //Get users: /home
    index(req, res, next) {
        res.render('home')
    }
    
}

module.exports = new HomeController;