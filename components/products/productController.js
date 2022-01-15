const Rating = require("../../models/rating");

exports.rate = async (req, res) => {
    const { productId, rating, content } = req.body;
    try {
        const newRating = await Rating.create({
            productId,
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
    // const productId = req.params.productId;
    Rating.find({})
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
