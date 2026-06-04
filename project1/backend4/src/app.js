const express = require("express");
const connectDB = require("../db/db");
const multer = require("multer");
const uploadFile = require("../services/storage.service");
const postmodel = require("../models/post.model");


const app = express();
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage()})

connectDB();

app.post('/create-post' , upload.single("image") ,  async (req , res) => {

    const result = await uploadFile(req.file.buffer)

    const post = await postmodel.create({
        image:result.url,
        caption:req.body.caption
    })

  return res.status(201).json({
        message:"post created successfully",
        post
    })
})

module.exports = app;