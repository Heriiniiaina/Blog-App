import express from "express"
import { likePost ,unlikePost} from "../controllers/like.controller.js"

const router = express.Router()


router.patch("/like-post",likePost)
router.patch("/unlike-post",unlikePost)

export default router