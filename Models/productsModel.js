const mongoose = require('mongoose');


const productsSchema = new  mongoose.Schema({
    title:{
        type:String,
        required:["Enter Product Title",true]
    },
    brand:{
        type:String,
        required:["Enter Product Brand",true]
    },
    price:{
        type:Number,
        required:["Enter Product Price",true]
    },  
    discountedPrice:{
        type:Number,
        required:["Enter Product Discountede Price",true]
    },
    discountPersent:{
        type:Number,
        required:["Enter Product Discount Persent",true]
    },
    quantity:{
        type:Number,
        required:["Enter Product Quantity",true]
    },
    colors:[{
        name:{type:String}
    }],
    sizes:[{
        name:{type:String},
        quantity:{type:Number}
    }],
    imageUrl:{
        type:String,
        required:["Enter Product  Image",true]

    },
    ratings:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"ratings"
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"reviews"
        }
    ],
    numRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,
        required:["Please Enter Product Des"]
    }
})



const Product = mongoose.model('products',productsSchema);


module.exports = Product;