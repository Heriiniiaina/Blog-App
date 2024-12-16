import express from "express"
import { login, register, sendVerificationCode, verifyVerifiacationCode } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup",register)
router.post("/sign",login)
router.patch("/send-verification-code",sendVerificationCode)
router.patch("/verify-verification-code",verifyVerifiacationCode)
export default router