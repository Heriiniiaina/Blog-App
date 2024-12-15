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
    
    
})