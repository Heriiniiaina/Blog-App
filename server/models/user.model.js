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
    birth:{
        type:String
    },
    city:{
        type:String
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/dho6csxnj/image/upload/v1735204357/blog_image/cn3j9zfsrmd0drp9dceg.png"
    },
    verified:{
        type:Boolean,
        default:false
    },
    verificationCode:{
        type:String,
        select:false
    },
    verificationCodeValidity:{
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
    },
    friend:[UserSchema],
    
})

export const User = mongoose.model("User",UserSchema)