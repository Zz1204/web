// 读取流    createReadStream();    txt文件   每64k一个文件大小
// 写入流    createWriteStream();


var fs=require("fs");
// var i=1;
// // 读取流
//     var rs=fs.createReadStream("1.txt");
//     // 读取流事件
//     rs.on("data",function(data1){
//         // console.log(data1);
//         fs.writeFile("stream"+i+".txt",data1,function(err){
//             if(err){
//                 console.log("分流失败");
//             }else {
//                 console.log("分流成功");
//             }
//         })
//         i++;
//     })

fs.readdir("js",function(err,files){
    if (err) {
        console.log(err);
    } else {
        // console.log(files);
        // forEach   循环数组
        files.forEach(function(item){
            // console.log(item);
            var path="./js/"+item;
            // console.log(path);
            fs.stat(path,function(err,stats){
                if (err) {
                    console.log(err);
                } else {
                    if (stats.isFile()) {
                        console.log(path+"是个文件");
                    } else if (stats.isDirectory()){
                        console.log(path+"是个文件夹");
                    }
                }
            })
        })
    }
})
