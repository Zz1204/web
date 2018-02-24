var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
	console.log(req.url);
	if(req.url=='/'){
		fs.readFile('http2.html','utf-8',function(err,data){
			if(err){
				console.log(err);
			}else{
				res.end(data);
			}
		})
	}else if(req.url=='/css/http2.css'){
		fs.readFile('css/http2.css','utf-8',function(err,data){
			if(err){
				console.log(err);
			}else{
				res.writeHead(200,{'content-type':'text/css'});
				res.end(data);
			}
		})
	}else if(req.url=='/js/index.js'){
		fs.readFile('js/index.js','utf-8',function(err,data){
			if(err){
				console.log(err);
			}else{
				res.writeHead(200,{'content-type':'text/javascript'});
				res.end(data);
			}
		})
	}else if(req.url=='/img/1.jpg'){
		fs.readFile('img/1.jpg',function(err,data){
			if(err){
				console.log(err);
			}else{
				res.writeHead(200,{'content-type':'image/jpeg'});
				res.end(data);
			}
		})
	}else if(req.url=='/sport.html'){
		fs.readFile('sport.html','utf-8',function(err,data){
			if(err){
				console.log(err);
			}else{
				res.writeHead(200,{'content-type':'text/html'});
				res.end(data);
			}
		})
	}
}).listen(9999);
