var express = require("express");
var app = express();
var port = process.env.PORT || 8080;



app.get('/',function(req,res){
	var browserInfo = req.headers['user-agent'];
	var browser = req.headers['user-agent'].split("(")[1].split(")")[0];
	var ip;
getClientAddress = function (req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
};
	ip=getClientAddress(req);
	var info = {browser: browser};
	
	res.send(ip);
	// res.json(info);

});

app.listen(port,function(){
	console.log("Server is running");
	
});