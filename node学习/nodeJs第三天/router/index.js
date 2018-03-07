
//  引入express  框架
var  express=require('express');
var fs=require('fs');
//  创建一个express的路由句柄
var router=express.Router();
router.post('/reg',function(req,res){
    //console.log(req.query);
    //前台通过post方式传输过来的数据后台通过req.body来接受，
    // 但是 req.body依赖于body-parser插件，所以必须下载body-parser插件
    //下载  npm  i -S body-parser
    //console.log(req.body);
    var json=JSON.stringify(req.body);
    fs.writeFile('post.json',json,function(err){
        if(err){
            res.send('服务器错误');
        }else{
            res.send('注册成功');
        }
    })
});
router.post('/login',function(req,res){
    fs.readFile('post.json','utf-8',function(err,data){
        if(err){
            res.send('服务器错误');
        }else{
            var json=JSON.parse(data);
            if(req.body.username==json.username&&req.body.pass==json.pass){
                res.send('登陆成功')
            }else{
                res.send('账号或者密码错误')
            }
        }
    })
})
router.post('/ajax',function(req,res){
    fs.readFile('post.json','utf-8',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json=JSON.parse(data);
            res.send(json);
        }
    })
})


module.exports=router;


