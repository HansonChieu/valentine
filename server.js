const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/answer", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "answer.html"));
});

app.get("/yes", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "yes.html"));
});

app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
