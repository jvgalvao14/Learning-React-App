const mongoose = require("mongoose");

const Posts = new mongoose.Schema({
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

module.exports = Posts = mongoose.model("post", posts);
