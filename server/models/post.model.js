import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    like:{
        type:Number,
        default:0
    },
    comment:{
        type:[String]
    }
})

export const Post = mongoose.model("Post",PostSchema)