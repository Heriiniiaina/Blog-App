import express from "express"
import authRoute from "./auth.routes.js"
import postRoute from "./post.routes.js"
import profileRoute from "./user.routes.js" 
import commentRoute from "./commentary.routes.js"
import likeRoute from "./like.routes.js"
import friendRoute from "./friends.routes.js"
const router = express.Router()
const BASE_URL = "/blog"
router.use(`${BASE_URL}/auth`,authRoute)
router.use(`${BASE_URL}/post`,postRoute)
router.use(`${BASE_URL}/profile`,profileRoute)
router.use(`${BASE_URL}/comment`,commentRoute)
router.use(`${BASE_URL}/like`,likeRoute)
router.use(`${BASE_URL}/friend`,friendRoute)
export default router