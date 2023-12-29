const mongoose = require("mongoose");

const mongodb = async () => {
  try {
    const database = await mongoose.connect(
      "mongodb+srv://courseManagement:wcgwduLEE1sdOdJW@cluster0.5vqck9h.mongodb.net/",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("database connect..");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = mongodb;
