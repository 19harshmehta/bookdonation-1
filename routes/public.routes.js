const express = require("express")
const sessionController = require("../controller/sessionController")
// const authMiddleware = require("../middleware/auth.middleware")


const router = express.Router()

router.post("/signup",sessionController.signup)
router.post("/login",sessionController.login)
router.get("/getallusers",sessionController.getAllUsers)

module.exports = router 