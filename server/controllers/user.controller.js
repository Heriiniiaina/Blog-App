export const getUserInfo = async(req,res,next)=>{
    try {
        const user = await getUserById(req.user._id)
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}