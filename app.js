const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("test", {});
});
app.get("/", (req, res) => {
  res.render("Home", {});
});
app.get("/one", (req, res) => {
  res.render("one", {});
});

app.get("/food", (req, res) => {
  res.render("food", {});
});

app.listen(port, () => {
  console.log("server open: ", port);
});
