var mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/test";
mongoose.connect(URI, { useUrlParsers: true });

var conn = mongoose.connection;

conn.on("connected", function () {
  console.log("Connection established");
});

conn.on("disconnected", function () {
  console.log("Connection closed");
});

conn.on("error", console.error.bind(console, "Connection error"));

module.exports = conn
