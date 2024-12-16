import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{

        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    image:{
        type:String
    },
    validationCode:{
        type:String,
        select:false
    },
    validationCodeValidity:{
        type:Number,
        select:false
    },
    forgotPasswordCode:{
        type:String,
        select:false
    },
    forgotPasswordCodeValidity:{
        type:String,
        select:false
    }
    
})

export const User = mongoose.model("User",UserSchema)