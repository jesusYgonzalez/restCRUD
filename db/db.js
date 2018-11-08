const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/restCrud",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch(() => {
    console.log("could not connect to db");
  });

module.exports = mongoose;
