const mongoose = require("mongoose");

//TIRAR ISSO DAQUI
const URI =
    "mongodb+srv://joao:Jj@134679@cluster0.tncqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDb = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("Connected with DB");
};

module.exports = connectDb;
