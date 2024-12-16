import express from "express"
import { addNewPost } from "../controllers/post.controller.js"
const router = express.Router()

router.post("/add-new-post",addNewPost)
export default router