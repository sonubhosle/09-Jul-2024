const mongoose = require('mongoose');



const cartItemSchema = new mongoose.Schema({

    cart:{
        type:mongoose.Schema.ObjectId,
        ref:"cart"
    },
    
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
    price:{
        type:Number,
    },
    discountedPrice:{
        type:Number,

    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true
    }

})


const CartItems = mongoose.model("cartItems",cartItemSchema);

module.exports = CartItems;