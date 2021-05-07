const express = require("express");
const connectDb = require("./config/connection.js");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

require("dotenv").config();
require("./controller/Post")(app);

app.use(express.json({ extended: false }));
app.use(cors());

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
