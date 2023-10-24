const mongoose = require('mongoose');

// const mongodbUrl = "mongodb+srv://amirliaqat2020:Secureatlas2023@cluster0.csw6jsu.mongodb.net/?retryWrites=true&w=majority";
const mongodbUrl = "mongodb://127.0.0.1:27017";

const connectDb = () => {
    return mongoose.connect(mongodbUrl);
}

module.exports = { connectDb };