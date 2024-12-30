import express from 'express';
import { addNewFriend,removeFriend,getFriends } from '../controllers/friend.controller.js';

const router = express.Router();
router.patch('/add-new-friend', addNewFriend);
router.patch('/remove-friend', removeFriend);
router.get('/get-friends/:userId', getFriends);
export default router;


