const express = require('express');

const app = express(); // express application ka ek instance create krta h

app.get("/" , (req , res) =>{
    res.send("Hello World");
})

app.get("/about" , (req , res)=>{
    res.send("About Page");
})

app.listen(3000 , () =>{
    console.log("Server Started") //server ko start krta h
});