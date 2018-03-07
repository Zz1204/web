
var  db=require('./db');
//  查询语句
//     db.select(["尼古拉斯赵四"],function(result){
//         console.log(result);
//     });
//   修改语句
//     db.update(["尼古拉斯富贵","web"],function(result){
//         console.log(result);
//     })

//   添加
//     db.insert(['王五',33,"男","总统"],function(result){
//         console.log(result);
//     });
    //  删除
    db.delete(["王五"],function(result){
        console.log(result);
    })
