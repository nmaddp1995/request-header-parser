var express = require("express");
var app = express();
var port = process.env.PORT || 8080;



app.get('/',function(req,res){
	var browserInfo = req.headers['user-agent'];
	var browser = req.headers['user-agent'].split("(")[1].split(")")[0];
	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

    var language = req.headers["accept-language"].split(',')[0];

	var info = {
		"ip" : ip,
		"language" : language,
		"browser" : browser
	};
	
	
	res.json(info);

});

app.listen(port,function(){
	console.log("Server is running");
	
});