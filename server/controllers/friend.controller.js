import { ErrorHandler } from "../middlewares/errorHandler.js";
import { User } from "../models/user.model.js";


export const addNewFriend = async (req, res,next) => {
    const { userId, friendId } = req.body;
    try {
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);
        if (!user || !friend) {
            throw new ErrorHandler("User not found", 404);
        }
        if(user.friend.includes(friendId)){
            throw new ErrorHandler("You are already friends",400)
        }
        user.friend.push(friend);
        await user.save();
        res.status(200).json({ message: "Friend added successfully" });
    } catch (error) {
        next(new ErrorHandler(error.message, error.statusCode));
    }
}


