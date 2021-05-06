const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
    res.send("Oof");
});

router.post("/create", (req, res) => {
    const post = new Post({
        title: req.body.title,
        postText: req.body.postText,
        username: req.body.username,
    });
    post.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
});

module.exports = router;
