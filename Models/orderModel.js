const mongoose = require('mongoose')



const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users"
    },

    orderItems:{
        type: mongoose.Schema.ObjectId,
        ref: "cartItems"
    },

    orderDate: {
        type: Date,
        require: true,
        default: Date.now()
    },
    deliveryDate: {
        type: Date
    },
    shippingAddress: {
        type: mongoose.Schema.ObjectId,
        ref: "addresses"
    },
    paymentDetails: {
        paymentMethod: {
            type: String
        },
        transactionId: {
            type: String,

        },
        paymentId: {
            type: String
        },
        paymentStatus: {
            type: String,
            default: "PENDING"
        }
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalDiscountPrice: {
        type: Number,
        required: true,
        default: 0
    },
    discount: {
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        default: "PENDING"
    },
    totalItem: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

const Order = mongoose.model('orders', orderSchema);


module.exports = Order;