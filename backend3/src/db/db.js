const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:pP9gYaPiS7tkSt7D@backend.2f7ptry.mongodb.net/halley");

    console.log("Conected to Database")
}

module.exports = connectDB  