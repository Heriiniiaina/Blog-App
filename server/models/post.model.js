import mongoose from "mongoose";

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
        type:Number,
        default:0
    },
    comment:{
        type:[String]
    }
},{
    timestamps:true
})

export const Post = mongoose.model("Post",PostSchema)