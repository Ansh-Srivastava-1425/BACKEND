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


//GET METHOD DATA KO BACKEND SE FRONTEND P LATA H
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Message fetched successfully",
    notes: notes,
  });
});

//DELETE METHOD PRESENT DATA KO DELETE KRTA H
app.delete("/notes/:index" , (req ,res) => {
  const index = req.params.index;

  delete notes[index];

  res.status(200).json({
    message: "Note deleted successfully",
  })
})

//PATCH METHOD DATA KO PARTIALY UPDATE KRNE KE LIYE USE HOTA H
app.patch("/notes/:index" , (req , res) =>{
  const index = req.params.index;

  const description = req.body.description;

  notes[index].description = description;

  res.status(200).json({
    message: "Note updated successfully",
  })
})

module.exports = app;
