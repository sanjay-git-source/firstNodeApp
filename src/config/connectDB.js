const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nodeDB");
    console.log("Database Connect successfully");
  } catch (error) {
    console.log("Error" + error);
  }
};
module.exports = dbConnection;
