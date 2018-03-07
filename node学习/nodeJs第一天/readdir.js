  var   fs=require('fs');
fs.readdir('./public',function(err,files){
    if(err){
        console.log(err);
    }else{
       // console.log(files);
        //  forEach   循环数组
        files.forEach(function(item){
            //console.log(item);
            var path='./public/'+item;
            //console.log(path);
            fs.stat(path,function(err,stats){
                if(err){
                    console.log(err);
                }else{
                    if(stats.isFile()){
                        console.log(path+'是个文件')
                    }else if(stats.isDirectory()){
                        console.log(path+'是个文件夹')
                    }
                }
            })
        })
    }
})