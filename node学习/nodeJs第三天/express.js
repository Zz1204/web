

//  express框架    nodeJs的再次封装的框架

// 如何使用  express框架  需要进行安装   npm  install -S express

//  引入express框架
var  express=require('express');
//  初始一个express入口函数
var  app=express();
//  设置监听的端口号listen(端口号(必填)，回调函数（非必填项）)
app.listen(3000,function(){
    console.log('服务器已经启动');
});
//  中间件  use()     req.url  默认匹配路径  /  参数 req,res,next
//  express 框架中  向前台返回数据   用  send()
//next()  函数 一定要放在  send 前面
// app.use('/index',function(req,res){
//     res.send('我是index返回的数据');
// });
// app.use('/',function(req,res){
//     // res.writeHead(200,{'content-type':'image/png'});
//     // res.end()
//     //res.send("<img src='1.jpg'/>");
//     // res.send('我是后台返回的数据');
// });
//  加载静态资源托管
app.use(express.static('public'));










