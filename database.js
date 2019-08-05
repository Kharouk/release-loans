const Mongoose = require("mongoose");

Mongoose.connect(
  "mongodb://localhost:27017/graphqlTest",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

const db = Mongoose.connection;

module.exports = db;
