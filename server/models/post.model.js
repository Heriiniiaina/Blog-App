
import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
})

const PostSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:null
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    like:{
       type:[likeSchema]
    },
    comment:{
        type:[String]
    }
},{
    timestamps:true
})

export const Post = mongoose.model("Post",PostSchema)