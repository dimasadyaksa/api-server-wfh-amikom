const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const studentRouter = require("./routers/student.router");
const app = express();
const functions = require("firebase-functions");

// Comment if using firebase
// mongoose.connect("mongodb://localhost:27017/wfh-amikom", {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use("/students", studentRouter);
app.get("/", function (req, res) {
  res.send("Hello World !");
});
exports.main = functions.https.onRequest(app);
