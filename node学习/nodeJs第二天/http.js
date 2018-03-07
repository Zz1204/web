
//  http  模块  nodeJS 中的内置模块
var  http=require('http');
var  fs=require('fs');
// 开始创建服务器  createServer()  创建服务器
// 回调函数 2个参数   req(请求对象)  res(响应对象)
//网址构成    http//:www.baidu.com
// http 传输协议  https  加密的传输协议
//  www.baidu.com   域名  主机  本地 localhost  127.0.0.1
//  端口号   3000以下的端口号不要用   监听端口号 listen()
http.createServer(function(req,res){

    //  前台返回数据   end()
    //res.end('hello world');
    //  请求对象  req   url  请求路径  m默认请求/
    //console.log(req.url);
    // if(req.url=='/'){
    //     res.end('hello world');
    // }else if(req.url=='/index'){
    //     res.end('index.html');
    // }

    if(req.url=='/'){
        //  加载index.html
      //  fs 模块
        fs.readFile('index.html','utf-8',function(err,data){
            if(err){
                console.log(err);
            }else{
                //  向前台发送界面的数据
                res.end(data);
            }
        })

    }else if(req.url=='/get'){
        fs.readFile('get.html','utf-8',function(err,data){
            if(err){
                console.log(err);
            }else{
                //  向前台发送界面的数据
                res.end(data);
            }
        })
    }


}).listen(9000)




