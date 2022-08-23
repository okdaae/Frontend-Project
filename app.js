const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("mmdaae", {});
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
app.get('/navbar_test', (req, res) =>{
  res.render("navbar_test", {});
})

app.get('/Information',(req, res) => {
    res.render('Information',{});
});

app.get('/mdaae',(req, res) => {
    res.render('mdaae',{});
});

app.get('/mmdaae',(req, res) => {
  res.render('mmdaae',{});
});


app.get("/food", (req, res) => {
    res.render("food", {});
});

app.get('/login', (req, res) => {
   res.render("login", {});
});


app.get('/member', (req, res) => {
  res.render("member", {});
});


app.listen(port, ()=>{
    console.log("server open: ", port);
});
