// yeh file server ko create krne liye hota h

const express = require("express");

const app = express();

const notes = [];

app.use(express.json());

//POST METHOD SE DATA FRONTEND SE BACKEND P JATA H
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note created successfully",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Message fetched successfully",
    notes: notes,
  });
});

module.exports = app;
