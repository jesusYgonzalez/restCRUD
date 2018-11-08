const express = require("express");
const mongoose = require("./db/db");
const bodyParser = require("body-parser");
const postController = require("./controllers/postController");

const app = express();
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.json({
//     message: "response from the backend"
//   });
// });

app.use("/api", postController);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
