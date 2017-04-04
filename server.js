var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var useragent = require("express-useragent");
app.use(useragent.express());

app.get('/',function(req,res){
	var browserInfo = req.headers['user-agent'];
	
	var os = req.useragent.os;
	var browser = req.useragent.browser;
	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

    var language = req.headers["accept-language"].split(',')[0];

	var info = {
		"ip" : ip,
		"language" : language,
		"os" : os ,
		"browser" : browser
	};
	
	
	res.json(info);

});

app.listen(port,function(){
	console.log("Server is running");
	
});