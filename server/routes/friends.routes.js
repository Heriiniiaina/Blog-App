import express from 'express';
import { addNewFriend } from '../controllers/friend.controller';

const router = express.Router();
router.post('/add-new-friend', addNewFriend);

export default router;


