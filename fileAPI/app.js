const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");

const filesPayloadExists = require("./middleware/filesPayloadExists");
const fileExtLimiter = require("./middleware/fileExtLimiter");
const fileSizeLimiter = require("./middleware/fileSizeLimiter");

const fileUpload2 = require("./routes/upload2");

const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use("/upload", fileUpload2);

app.get("/", (req, res) => {
  res.send("the api is working");
});

app.post(
  "/upload2",
  fileUpload({ createParentPath: true }),
  fileSizeLimiter,
  filesPayloadExists,
  fileExtLimiter([".png", ".JPG", ".jpeg", "jpg"]),
  (req, res) => {
    const files = req.files;
    console.log(files);

    Object.keys(files).forEach((key) => {
      const filepath = path.join(__dirname, "files", files[key].name);
      files[key].mv(filepath, (err) => {
        if (err) return res.status(500).json({ status: "error", message: err });
      });
    });

    return res.json({
      status: "success",
      message: Object.keys(files).toString(),
    });
  }
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
