const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env);

//TIRAR ISSO DAQUI
const URI = process.env.DB_KEY;

const connectDb = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Connected with DB");
};

module.exports = connectDb;
