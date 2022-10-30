const mongoose = require('mongoose');

const UserDetailsScehma = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    },
    {
        collection: "UserInfo",
    });


mongoose.model("UserInfo", UserDetailsScehma);