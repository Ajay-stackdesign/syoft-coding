const User = require("../models/userModels")
const sendToken = require("../utils/sendToken")

exports.registerUser = async (req, res, next) => {
    try {
        const { username, email, password, phone, role } = req.body
        console.log(req.body)
        const user = await User.create({
            username,
            email,
            password,
            phone,
            role
        })
        sendToken(user, 200, res)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(500).json({
                message: "Invalid Email or password"
            })
        }

        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            return res.status(500).json({
                message: "Invalid Email or Password"
            })
        }

        const isPassword = await user.comparePassword(password)
        if (!isPassword) {
            return res.status(500).json({
                message: "Invalid Email or Password"
            })
        }
        sendToken(user, 200, res)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.logoutUser = async (req, res, next) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        })

        res.status(200).json({
            success: true,
            message: "You are Logged Out"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}



