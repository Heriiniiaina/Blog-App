import express from "express"
import { login, register, sendVerificationEmail } from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/signup",register)
router.post("/sign",login)
router.patch("/send-verification-code",sendVerificationEmail)
export default router