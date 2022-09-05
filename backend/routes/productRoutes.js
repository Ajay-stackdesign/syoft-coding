const express = require("express")
const { createProduct, updateProduct, getAllProduct, getProduct, getSingleDetails } = require("../controller/productController")
const { isAutheticated, autorizesRoles } = require("../middleware/auth")

const router = express.Router()

router.route("/create").post(isAutheticated, createProduct)
router.route("/update/:id").put(isAutheticated, updateProduct)
router.route("/product").get(getProduct)
router.route("/single/:id").get(getSingleDetails)

module.exports = router