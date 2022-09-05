const mongoose = require("mongoose")

const database = () => {
    mongoose.connect("mongodb://localhost:27017/syoft", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected to database")
        }).catch((error) => {
            console.log(error.message)
        })
}

module.exports = database