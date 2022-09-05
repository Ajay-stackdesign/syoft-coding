const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: [true, "Please enter the description"],
    },
    price: {
        type: String,
        required: [true, "Please enter the price"],
        maxlength: [8, "Price cannot exceed more than 8characters"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter the stock"],
        maxlength: [4, "stock cannot exceed morre than 4"],
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Product", productSchema)