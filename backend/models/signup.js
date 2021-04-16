const mongoose=require('mongoose')

const signup = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    mobile: {
        type:Number,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('usersData',signup)