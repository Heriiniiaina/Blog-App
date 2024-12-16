import express from "express"
import authRoute from "./auth.routes.js"
import postRoute from "./post.routes.js"
const router = express.Router()
const BASE_URL = "/blog"
router.use(`${BASE_URL}/auth`,authRoute)
router.use(`${BASE_URL}/post`,postRoute)
export default router