const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
  const { userName, email, password } = req.body;

  const user = await userModel.create({
    userName,
    email,
    password,
  });

  const token = jwt.sign({
    id:user._id
  } , process.env.JWT_SECRET)

  res.status(201).json({
    message:"user resgisterd",
    user,
    token
  })
}

module.exports = { registerUser };
