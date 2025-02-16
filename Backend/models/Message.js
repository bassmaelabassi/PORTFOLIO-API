const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

const messageModel = mongoose.model('Message', messageSchema);

module.exports = messageModel;