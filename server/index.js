const express = require("express");
const app = express();
const connectDb = require("./config/connection.js");

connectDb();
app.use(express.json({ extended: false }));
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server running on port 3001");
});
