const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
  const {userName , email , password} = req.body;

  const userAlreadyExists = await userModel.findOne({email})

  if(userAlreadyExists){
    return res.status(409).json({
      message:"user Already "
    })
  }

  const user = await userModel.create({
    userName , email , password
  })

  const token = jwt.sign({
    id : user._id , 
  }, process.env.JWT_SECRET)  

  res.cookie("token" , token)

  res.status(201).json({
    message:"User registered successfully",
    user
  })
}

module.exports = { registerUser };
