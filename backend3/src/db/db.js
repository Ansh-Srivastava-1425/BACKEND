const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("");

    console.log("Conected to Database")
}

module.exports = connectDB  