import express from 'express';
import { addNewFriend } from '../controllers/friend.controller.js';

const router = express.Router();
router.patch('/add-new-friend', addNewFriend);

export default router;


