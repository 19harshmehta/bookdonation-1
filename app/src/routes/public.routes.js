const express = require("express")
const sessionController = require("../controller/sessionController")
const donationController = require("../controller/donationController")
// const authMiddleware = require("../middleware/auth.middleware")


const router = express.Router()

router.post("/signup",sessionController.signup)
router.post("/login",sessionController.login)
router.get("/getallusers",sessionController.getAllUsers)

//donation
router.post("/createdonation",donationController.addDonation)
router.get("/getalldonation",donationController.getAllDonations)


module.exports = router 