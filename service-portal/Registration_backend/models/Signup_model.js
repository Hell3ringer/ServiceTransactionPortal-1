 
const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('professionals',signupTemplate)
