import express from "express"
import authRoute from "./auth.routes.js"

const router = express.Router()
const BASE_URL = "/blog"
router.use(`${BASE_URL}/auth`,authRoute)
export default router