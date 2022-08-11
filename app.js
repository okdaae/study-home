const express = require("express");
const app = express();
app.set("view engine", "ejs")
app.use('/static', express.static('static'));
const port = 8000;
// localhost:8000/

app.get("/", (req,res)=>{
    res.render('test');
})
app.get('/test1',(req,res)=>{
    res.render('test1');
})
app.get('/test2',(req,res)=>{
    res.render('test2');
})
app.listen(port, ()=>{
    console.log("server open: ", port);
})
