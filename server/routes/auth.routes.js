import express from "express"
import { login, logout, register, sendVerificationCode, verifyVerifiacationCode } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup",register)
router.post("/sign",login)
router.post("/signout",logout)
router.patch("/send-verification-code",sendVerificationCode)
router.patch("/verify-verification-code",verifyVerifiacationCode)
export default router