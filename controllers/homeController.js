const {MultiMongoosetoObject} = require('../ulti/mongoose')
const User = require('../models/User')
const Item = require('../models/item')

class HomeController{
    //Get users: /home
    index(req, res, next) {
        res.render('home')
    }
    show_cate(req, res, next)
      {
        var page = req.query.page || 1;
        const PAGE_SIZE = 6;   
        page = parseInt(page);
        var skip = (page - 1) * PAGE_SIZE;
        Item.find({category: req.params.category})
              .skip(skip)
              .limit(PAGE_SIZE)
              .then((items) => {
                res.render('shop_grid',{items: MultiMongoosetoObject(items)});
                })
              .catch((err) => {
                res.status(500).json("loi server");
                });
            }

    
}

module.exports = new HomeController;