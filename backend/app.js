const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: "api/config/.env" })

app.use(express.json({ limit: "50mb" }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

const productRoute = require("./routes/productRoutes")
const userRoute = require("./routes/userRoutes")

app.use("/api/v1", productRoute)
app.use("/api/v1", userRoute)

module.exports = app