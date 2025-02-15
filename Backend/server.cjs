const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/portfolio').then(()=>{
    console.log('Connected to mongoDB');
}).catch((err)=>console.log(err));

const messageRoutes = require("./routes/messages");
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));