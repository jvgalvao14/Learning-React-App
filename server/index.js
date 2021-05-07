const express = require("express");
const app = express();
const connectDb = require("./config/connection.js");
const port = process.env.PORT;

require("dotenv").config();
require("./controller/Post")(app);

app.use(express.json({ extended: false }));

//connecting to the DB
connectDb();

//import routes
const postsRoute = require("./Routes/posts");
//using routes
app.use("/posts", postsRoute);

//listening to the port
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server running on port ${port}`);
});
