import express from "express"
import { addNewPost, allPosts, getUserPosts } from "../controllers/post.controller.js"
import upload from "../utils/multer.config.js"
const router = express.Router()

router.post("/add-new-post",upload.single("image"),addNewPost)
router.get("/get-all-post",allPosts)
router.get("/get-user-post/:id",getUserPosts)
export default router