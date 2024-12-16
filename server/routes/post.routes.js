import express from "express"
import { addNewPost, allPosts, getUserPosts } from "../controllers/post.controller.js"
const router = express.Router()

router.post("/add-new-post",addNewPost)
router.get("/get-all-post",allPosts)
router.get("/get-user-post",getUserPosts)
export default router