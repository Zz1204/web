/**
 * Created by zz on 2018/2/27.
 */
var db=require('./db');
//查询语句
db.select(["尼古拉斯赵四"],function (result) {
    // console.log(result);
    result.forEach(function(item){
        console.log(item.job);
    })
});

//修改语句
// db.update(['尼古拉斯富贵','web'],function (result) {
//     console.log(result);
// });

//添加语句
// db.insert(["六六六",20,"男","磨菜刀的"],function (result) {
//     console.log(result);
// });

//删除语句
// db.delete(["六六六"],function (result) {
//     console.log(result);
// });