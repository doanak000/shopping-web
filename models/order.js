const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    //_orderId : mongoose.Schema.Types.ObjectId,
    user:{type:mongoose.Schema.Types.ObjectId, ref = "User" },
    cart: {type: Object, required: true},
    address:{type: String, required: true},
    product: {type: mongoose.Schema.Types.ObjectId, ref='Item'},
    name:{type: String, required: true},
    paymentId: {type: String, required: true},
    quantity:{type: Number, default: 1},
    price: {type: Number, required: true}
})


module.exports = mongoose.model('order', orderSchema)
