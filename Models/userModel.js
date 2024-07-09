const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
     firstName:{
        type:String,
        required:["Please Enter Name",true]
     },
     lastName:{
        type:String,
        required:["Please Enter Last Name",true]
     },
     password:{
        type:String,
        required:["Please Enter Password",true]
     },
     email:{
        type:String,
        required:["Please Enter Email",true]
     },
     mobile:{
        type:String,
        required:["Please Enter Mobile Number",true]
     },
     role:{
        type:String,
        required:true,
        default:"CUSTOMER"
     }
})


const User = mongoose.model("users",userSchema);
module.exports = User;