const { MultiMongoosetoObject } = require('../ulti/mongoose');
const Item = require('../models/item')

class shopgridController{
    //Get item: /items

    index(req, res, next) {
        var page = req.query.page;
        var item = req.query.item;
        const PAGE_SIZE = 6;
        
        if (item) {
          if (page) {
            page = parseInt(page);
            var skip = (page - 1) * PAGE_SIZE;
            Item.find({ item: "ves" })
              .skip(skip)
              .limit(PAGE_SIZE)
              .then((items) => {
                res.render('shop_grid',{items: MultiMongoosetoObject(items)});
              })
              .catch((err) => {
                res.status(500).json("loi server");
              });
          } else {
            Item.find({ item: "ves" })
              .then((items) => {
                res.render('shop_grid',{items: MultiMongoosetoObject(items)});
              })
              .catch((err) => {
                res.status(500).json("loi server");
              });
          }
        } else {
          if (page) {
            page = parseInt(page);
            var skip = (page - 1) * PAGE_SIZE;
            Item.find({})
              .skip(skip)
              .limit(PAGE_SIZE)
              .then((items) => {
                res.render('shop_grid',{items: MultiMongoosetoObject(items)});;
              })
              .catch((err) => {
                res.status(500).json("loi server");
              });
          } else {
            Item.find({})
              .then((items) => {
                res.render('shop_grid',{items: MultiMongoosetoObject(items)});
              })
              .catch((err) => {
                res.status(500).json("loi server");
              });
          }
        }
        
    }
      //Get: /items/:category
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
                res.render('shop_grid2',{items: MultiMongoosetoObject(items)});
                })
              .catch((err) => {
                res.status(500).json("loi server");
                });
            }

          }
module.exports = new shopgridController;