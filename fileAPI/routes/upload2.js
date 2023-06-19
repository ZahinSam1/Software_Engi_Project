const express = require("express");
const fileUploader = require("express-fileupload");
const db_connection = require("../database/connection");
const fileUpload = require("express-fileupload");
const filesPayloadExists = require("../middleware/filesPayloadExists");
const fileExtLimiter = require("../middleware/fileExtLimiter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");

const router = express.Router();

// Handle file upload
router.post(
  "/",
  fileUploader({ createParentPath: true }),
  fileSizeLimiter,
  filesPayloadExists,
  async (req, res) => {
    var file = req.files.file;
    if (!file) {
      // console.log(file);
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    try {
      const collection = db_connection.collection("test2");
      await collection.insertOne({ file: file });

      res.json({ message: "File uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  }
);

router.get("/data", async (req, res) => {
  try {
    const collection = db_connection.collection("test2");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

module.exports = router;
