const express = require("express");
const app = express();
const connectDb = require("./config/connection.js");
const port = process.env.PORT;
require("dotenv").config();
require("./controller/Post")(app);

app.use(express.json({ extended: false }));

connectDb();

//import routes
const postsRoute = require("./Routes/posts");

app.use("/posts", postsRoute);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server running on port ${port}`);
});
