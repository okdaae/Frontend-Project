const express = require("express");           
const app = express();                      
app.set("view engine", "ejs");                 
app.use("/static", express.static("static")) ;
app.use('/static', express.static('public'));

const port = 8000;

app.get('/',(req, res) => {
    res.render('test',{});
});

app.get('/surInfo',(req, res) => {
    res.render('surInfo',{})
});

app.get('/Home',(req, res) => {
    res.render('Home',{});
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});