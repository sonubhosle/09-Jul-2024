const mongoose = require('mongoose')



const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: ["Please enter name ", true]
    },
    lastName: {
        type: String,
        required: ["Please enter last name ", true]
    },
    streetAddress: {
        type: String,
        required: ["Please enter  street address ", true]
    },
    city: {
        type: String,
        required: ["Please enter  City ", true]
    },
    state: {
        type: String,
        required: ["Please enter  state ", true]
    },
    zipCode: {
        type: Number,
        required: ["Please enter  pin code ", true]
    },
    mobile: {
        type: String,
        required: ["Please enter mobile number ", true]
    },
    email: {
        type: String,
        required: ["Please enter  Email ", true]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users"
    }
})


const Address = mongoose.model("addresses", addressSchema);


module.exports = Address;