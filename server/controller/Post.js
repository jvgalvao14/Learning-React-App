const router = require("express").Router();
const Posts = require("../models/Post");

router.post("/create", async (req, res) => {
    try {
        const post = await Posts.create(req.body);

        return res.send({ post });
    } catch (err) {
        return res.status(400).send({ error: "registration failed" });
    }
});

module.exports = (app) => {
    app.use("/post", router);
};
