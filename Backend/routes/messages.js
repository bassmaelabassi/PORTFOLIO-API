const express = require("express");
const Message = require("../models/Message.js");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newMessage = new Message({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            message: req.body.message
        });
        await newMessage.save();
        res.status(201).json({message: "message sent successfully"});
    } catch (error) {
        res.status(500).json({error: "Failed to send message"});
    }
});

router.get("/", async (req, res) => {
    try {
        const messages =  await Message.find();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch message" });
    }
});


module.exports = router;