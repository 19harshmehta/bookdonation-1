const express = require("express")
const categoryController = require("../controller/categotyController")
const authMiddleware = require("../middleware/auth.middleware")

const router = express.Router()

// router.post("/addcategory",authMiddleware,categoryController.addCategoty)
// router.get("/getallcategory",authMiddleware,categoryController.getAllCategories)
router.post("/addcategory",categoryController.addCategoty)
router.get("/getallcategory",categoryController.getAllCategories)

router.delete("/deletecategory/:categoryId",authMiddleware,categoryController.deleteCategoryById)




module.exports = router