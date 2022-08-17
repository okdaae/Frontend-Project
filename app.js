const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("test", {});
});
app.get("/one", (req, res) => {
  res.render("one", {});
});

app.get('/tools',(req, res) => {
    res.render('tools',{})
});

app.get('/navbar',(req, res) => {
  res.render('navbar',{})
});

app.get('/Home',(req, res) => {
    res.render('Home',{});
});
app.get('/Information',(req, res) => {
    res.render('Information',{});
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});
