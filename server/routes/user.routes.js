import express from "express"
import {updateUserProfile} from "../controllers/profile.controller.js"
import upload from "../utils/multer.config.js"
import { getUserInfo } from "../controllers/user.controller.js"
const router = express.Router()

router.patch("/update-profile",upload.single('image'),updateUserProfile)
router.get("/get-user/:userId",getUserInfo)

export default router