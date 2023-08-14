const mongoose = require("mongoose");

// const mongoURI = "mongodb://localhost:27017/";
const mongoURI = "mongodb://127.0.0.1/inotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connect");
  } catch (err) {
    console.log("Error", err);
  }
};
module.exports = connectToMongo;
