const { MongoosetoObject } = require('../ulti/mongoose')
const Item = require('../models/item')

class shop_detailsController{
    //Get : /item/:_id
    show(req, res, next) 
    {
        Item.findById( {_id: req.params._id })
            .then(
                itemdetails => res.render('shop_details',{ itemdetails:MongoosetoObject(itemdetails)})
            )
            .catch(next)
    }  
}

module.exports = new shop_detailsController;