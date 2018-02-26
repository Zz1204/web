/**
 * Created by zz on 2018/2/26.
 */
//引入fs
var fs=require('fs');
//引入express框架
var express=require('express');
//创建一个express的路由句柄
var router=express.Router();
router.post('/reg',function(req,res){
    //post 前台通过post方式传输过来的数据后台通过req.body接收
    // 但是req.body依赖于body-parser插件,所以必须下载body-parser插件
    //下载   npm i -S body-parser
    var json=JSON.stringify(req.body);
    fs.writeFile('post.json',json,function (err) {
        if (err) {
            res.send('注册失败');
        } else {
            res.send('注册成功');
        }
    })
});
router.post('/login',function(req,res){
    fs.readFile('post.json','utf-8',function(err,data){
        if(err){
            res.send('服务器错误');
        } else{
            var json=JSON.parse(data);
            if(req.body.username==json.username&&req.body.pass==json.pass){
                res.send('登录成功');
            }else{
                res.send('账号或密码错误');
            }
        }
    });
});
module.exports=router;