var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("index.html");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp Server Has Started");
});