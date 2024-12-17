import express from "express"
import {updateUserProfile} from "../controllers/profile.controller.js"
import upload from "../utils/multer.config.js"
const router = express.Router()

router.patch("/update-profile",upload.single('image'),updateUserProfile)


export default router