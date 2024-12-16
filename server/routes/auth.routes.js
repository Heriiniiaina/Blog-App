import express from "express"
import { login, register } from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/signup",register)
router.post("/sign",login)
export default router