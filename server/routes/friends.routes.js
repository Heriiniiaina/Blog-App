import express from 'express';
import { addNewFriend,removeFriend } from '../controllers/friend.controller.js';

const router = express.Router();
router.patch('/add-new-friend', addNewFriend);
router.patch('/remove-friend', removeFriend);
export default router;


