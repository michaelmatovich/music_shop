//import express/cors
const express = require("express"); 
const cors = require("cors");

//create express app
const app = express(); 
const port = 8000; 

//app.use commands before routes
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(cors());

//import mongoose config
require("./server/config/mongoose.config");

//routes need to be below all app.use commands
require("./server/routes/music_shop.routes")(app);



//last line of server.js
app.listen(port, ()=>console.log(`Listening on port ${port}`));