const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.DB_KEY;

const connectDb = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Connected with DB");
};

module.exports = connectDb;
