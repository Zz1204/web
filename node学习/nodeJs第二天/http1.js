
var  http=require('http');
var  fs=require('fs');
http.createServer(function(req,res){
    //  直接返回img标签   说明没有设置头信息
    //  writeHead   方法就是用来设置头部信息的
    // 2个参数
    //  1参数
    // http状态码
    //  404找不到目标文件
    //  200  请求成功
    //  304   读取缓存信息
    //  500  服务器错误
    //  第二个参数  {content-type:头部格式 text/png }
    // res.writeHead(200,{"content-type":"image/png"});
    // res.end("<img src='1.png'/>")
    console.log(req.url);
    if(req.url=='/'){
        fs.readFile('http.html','utf-8',function(err,data){
            if(err){
                console.log(err)
            }else{
               res.end(data);
            }
        })
    }else if(req.url=='/1.png'){
        fs.readFile('1.png',function(err,data){
            if(err){
                console.log(err)
            }else{
                res.writeHead(200,{'content-type':'image/png'})
                res.end(data);
            }
        })
    }


}).listen(8500);