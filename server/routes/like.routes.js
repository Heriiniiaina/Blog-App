import express from "express"
import { likePost } from "../controllers/like.controller.js"

const router = express.Router()


router.patch("/like-post",likePost)


export default router