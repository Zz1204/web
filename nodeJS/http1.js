var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	//直接返回img 标签       说明没有设置头信息
//	res.writeHead() 用来设置头部信息     两个参数
//	    1、  http状态码     
//			404 找不到目标文件
//			200 请求成功
//			304 读取缓存信息
//			500 服务器错误
//		2、{content-type:头部格式}

//		网页里面有 src、link、href、script

//	res.writeHead(200,{"content-type":"image/jpeg"})
//	res.end("<img src='1.jpg'/>");
	console.log(req.url);
	if(req.url=='/'){
		fs.readFile('http.html','utf-8',function(err,data){
			if(err){
				console.log(err);
			}else{
				res.end(data);
			}
		})
	}else if(req.url=='/1.jpg'){
		fs.readFile('1.jpg',function(err,data){
			if(err){
				console.log(err);
			}else{
				res.writeHead(200,{"content-type":"image/jpeg"});
				res.end(data);
			}
		})
	}
}).listen(8888)
