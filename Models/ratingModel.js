const mongoose = require('mongoose');


const ratingModel = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'users',
        required:true
    },

   product:{
        type:mongoose.Schema.ObjectId,
        ref:'products',
        required:true
    },
    rating:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})