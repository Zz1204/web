
//  express中get方式进行传输数据
//  引入express框架
var  express=require('express');
//  fs模块
var  fs=require('fs');
//   初始入口函数
var  app=express();
//  监听的端口号
app.listen(3000,function(){
    console.log('服务器已经启动');
});
// get  方式进行接收
app.get('/index',function(req,res){
    //get 方式进行接收数据  req.query
    //console.log(req.query);
    //  把得到的前台数据对象转化字符串
    //  json 类型
          //  对象转字符串  JSON.stringify()
            //  字符串转对象  JSON.parse()
    var json=JSON.stringify(req.query);
    fs.writeFile('person.json',json,function(err){
        if(err){
            res.send('创建错了');
        }else{
           res.send('注册成功');
        }
    })
});
 //  处理login的逻辑
app.get('/login',function(req,res){
    //console.log(req.query);
    fs.readFile('person.json','utf-8',function(err,data){
        if(err){
            res.send('服务器错误');
        }else{
           // console.log(typeof data);
            var json=JSON.parse(data);
            if(req.query.username==json.username&&req.query.pass==json.pass){
                res.send('登录成功');
            }else{
                res.send('账号或者密码错误');
            }

        }
    })


});


// 静态资源托管
app.use(express.static('public'));
