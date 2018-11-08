const express = require("express");
const MODEL_PATH = "../models/";
const Post = require(MODEL_PATH + "post");
// router from express
const router = express.Router();

//GET posts route
router.get("/", (req, res, next) => {
  Post.find()
    .then(result => {
      res.json({ message: "here are all the posts", result: result });
    })
    .catch(err => console.log(err));
});

//Get single post route
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id)
    .then(result => {
      res.json({
        message: "here is your post",
        post: result
      });
    })
    .catch(err => console.log(err));
});

//Post Route
router.post("/post", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post
    .save()
    .then(result => {
      console.log(result);
      res.json({
        message: "posts saved to database!",
        result: result
      });
    })
    .catch(err => {
      console.log(err);
    });
});

//UPDATE post
router.put("/post/:id", (req, res, next) => {
  const post = {
    title: req.body.title,
    content: req.body.content
  };
  Post.updateOne({ _id: req.params.id }, post)
    .then(result => {
      // console.log(post);
      res.status(200).json({
        message: "Update Successful",
        result: post
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate Post!!",
        error: error
      });
    });
});

//DELETE post
router.delete("/post/:id", (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
    .then(result => {
      console.log(result);
      res.json({ message: "post deleted!" });
    })
    .catch(err => console.log(err));
});

module.exports = router;
