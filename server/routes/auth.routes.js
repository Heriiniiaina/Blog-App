import express from "express"
import { login, logout, register, sendForgotPasswordCode, sendVerificationCode, verifyForgotPasswordCode, verifyVerifiacationCode } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup",register)
router.post("/sign",login)
router.post("/signout",logout)
router.patch("/send-verification-code",sendVerificationCode)
router.patch("/verify-verification-code",verifyVerifiacationCode)
router.patch("/send-forgot-password-code",sendForgotPasswordCode)
router.patch("/verify-forgot-password-code",verifyForgotPasswordCode)
export default router