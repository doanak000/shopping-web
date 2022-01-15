const Rating = require("../../models/rating");
const Item = require("../../models/item");
var url = require('url');

exports.getProduct = (req, res) => {
    // console.log("==================================")
    // console.log(req.params.id)
    // res.render('../components/products/shop_details');
    Item.findById(req.params.id)
        .then((item)=>{
            res.render('../components/products/shop_details', {productId: item._id, quantity:item.quantity, price: item.price, 
                item: item.item, imageLink: item.imageLink, availability: item.availability, shipping: item.shipping, weight: item.weight, 
            description: item.description, category: item.category});
        })
        .catch((error)=>{
            res.status(500).json({
                status: "fail",
                message: error.message,
            })
        })
}

exports.getFistProduct = (req, res) => {
    Item.findById("619f522f86b9f5e644f9722c")
        .then((item)=>{
            res.render('../components/products/shop_details', {productId: item._id, quantity:item.quantity, price: item.price, 
                item: item.item, imageLink: item.imageLink, availability: item.availability, shipping: item.shipping, weight: item.weight, 
            description: item.description});
        })
        .catch((error)=>{
            res.status(500).json({
                status: "fail",
                message: error.message,
            })
        })
}

exports.rate = async (req, res) => {
    const { rating, content, productId, customer } = req.body;
    try {
        const newRating = await Rating.create({
            productId,
            customer,
            rating,
            content,
        });
        res.status(201).json(newRating);
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message,
        });
    }
}

exports.getRatings = (req, res) => {
    const productId = req.params.id;
    Rating.find({productId})
        .then((ratings)=>{
            res.status(200).json(ratings);
        })
        .catch((error)=>{
            res.status(500).json({
                status: "fail",
                message: error.message,
            })
        })
}
