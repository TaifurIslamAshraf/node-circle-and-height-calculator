const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/views/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/views/triangle.html");
});

app.post("/triangle", (req, res) => {
  const { base, height } = req.body;
  const aria = 0.5 * base * height;
  res.send(`<h1>aria of Triangle: ${aria}</h1>`);
});

app.post("/circle", (req, res) => {
  const { redius } = req.body;
  const aria = Math.PI * redius * redius;
  res.send(`<h1>aria Of Circle: ${aria}</h1>`);
});

module.exports = app;
