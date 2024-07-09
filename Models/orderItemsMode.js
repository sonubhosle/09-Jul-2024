
const mongoose = require('mongoose');


const orderItemSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"products"
    },
    size:{
        type:String
    },
    color:{
        type:String
    },
    quantity:{
        type:Number
    },
    price:{
        type:Number

    },
    discountedPrice:{
        type:Number,
        required:true

    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true
    }
})


const OrderItem = mongoose.model('orderItems',orderItemSchema)

module.exports = OrderItem;