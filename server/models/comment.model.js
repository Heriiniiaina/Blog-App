import mongoose from "mongoose"

const CommentSchema = mongoose.Schema({
    content:{
        type:String,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
},{
    timestamps:true
})

export const Commententary = mongoose.model("Commentary",CommentSchema)