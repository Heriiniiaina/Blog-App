export const addNewFriend = async (req, res) => {
    const { userId, friendId } = req.body;
    try {
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);
        if (!user || !friend) {
            return res.status(404).json({ message: "User or friend not found" });
        }
        user.friend.push(friend);
        await user.save();
        res.status(200).json({ message: "Friend added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}