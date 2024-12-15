import mongoose from "mongoose";
import { ErrorHandler } from "../middlewares/errorHandler.js";

export const dbConnect = async (req,res,next)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected`)
    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}