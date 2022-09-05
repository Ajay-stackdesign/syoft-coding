const Product = require("../models/productModel")

exports.createProduct = async (req, res, next) => {
    try {
        if (req.user.role === 'admin') {
            const product = await Product.create(req.body);

            res.status(201).json({
                success: true,
                product,
            });
        } else {
            res.status(500).json({
                message: "You dont have access to create product"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getProductDetail = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return next(new ErrorHander("product not found", 500))
        }

        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// get Admin product

exports.getProduct = async (req, res, next) => {
    try {
        const products = await Product.find()

        res.status(200).json({
            success: true,
            products,
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getSingleDetails = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(500).json("Book not found")
        }

        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        if (req.user.role === 'admin' || req.user.role === 'manager') {
            let product = await Product.findById(req.params.id)

            if (!product) {
                return res.status(500).json("product not found")
            }

            product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
                useFindAndModify: false
            })

            res.status(200).json({
                success: true,
                product,
            })
        } else {
            res.status(500).json({
                message: "You dont have access to update product"
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
