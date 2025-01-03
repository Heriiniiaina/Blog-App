import express from "express"
import { addComment,getPostCommentary } from "../controllers/comment.controller.js"
const router = express.Router()


router.post("/add-comment",addComment)
router.get("/get-comment/:postId",getPostCommentary)

export default router