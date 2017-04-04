var express = require("express");
var app = express();
var port = process.env.PORT || 8080;



app.get('/',function(req,res){
	res.send("Server ok");

});

app.listen(port,function(){
	console.log("Server is running");
	
});