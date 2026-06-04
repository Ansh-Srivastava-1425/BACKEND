const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log("connected to Database")
}

module.exports = connectDB;