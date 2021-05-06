const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    postText: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Post", Post);
