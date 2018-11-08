const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostsSchema = new Schema({
  title: "String",
  content: "String"
});

module.exports = mongoose.model("Posts", PostsSchema);
