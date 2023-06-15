const express = require("express");
var app = express();

const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
var imageModel = require("./models/imageModel");

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//set Storage
var storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cd(null, file.filedname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });
// view engine setup
app.set("views", path.join(__dirname, "views"));


//get method
app.get("/", (res, req) => {
  res.render("index");
});

app.post("/uploadPhoto", upload.single("myImage"), (req, res) => {
  var image = fs.readFileSync(req.file.path);
  var encod_img = image.toString("base64");
  var final_img = {
    contentType: req.file.mimetype,
    image: new Buffer(encod_img, "base64"),
  };
  imageModel.create(final_img, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result.image.Buffer);
      console.log("saved to database");
      res.contentType(final_img.contentType);
      res.send(final_img.image);
    }
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
