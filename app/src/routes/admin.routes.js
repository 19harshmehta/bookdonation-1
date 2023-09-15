const express = require("express")
const categoryController = require("../controller/categotyController")
const authMiddleware = require("../middleware/auth.middleware")
const ItemController = require("../controller/itemController")

const router = express.Router()

// router.post("/addcategory",authMiddleware,categoryController.addCategoty)
// router.get("/getallcategory",authMiddleware,categoryController.getAllCategories)
// Category table
router.post("/addcategory",categoryController.addCategoty)
router.get("/getallcategory",categoryController.getAllCategories)
router.delete("/deletecategory/:categoryId",categoryController.deleteCategoryById)

//Item table

router.post("/additem",ItemController.addItem)
router.get("/getallitem",ItemController.getAllItems)
router.delete("/deleteitem/:itemId",ItemController.deleteItemById)


module.exports = router