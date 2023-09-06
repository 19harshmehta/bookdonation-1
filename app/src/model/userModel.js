const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        toLowerCase:true
    },
    password:{
        type:String,
        required:true
    },
    contactNum:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    activeInd:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    },
    profileUrl:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
})

module.exports = mongoose.model("BUser",UserSchema)

