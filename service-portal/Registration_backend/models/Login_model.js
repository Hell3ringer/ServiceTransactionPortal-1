 
const mongoose = require('mongoose')

const loginTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('loginseeker',loginTemplate)
