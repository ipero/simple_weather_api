var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/weather", function(req, res){
  res.send("Get weather");
});

app.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
