const { MongoosetoObject } = require('../ulti/mongoose')
const Item = require('../models/item')

class shop_detailsController{
    //Get : /item/:_id
    show(req, res, next) 
    {
        const ObjectId = require('mongodb').ObjectId;
        const id = ObjectId(req.params.id);
        Item.findOne( {_id: id })
            .then(
                itemdetails => res.render('shop_details',{ itemdetails:MongoosetoObject(itemdetails)})
            )
            .catch(next)
    }
    
}

module.exports = new shop_detailsController;