
  var add=function(str){
       console.log(str);
   }

    var add1=function(str1){
        console.log(str1);
    }
  //module.exports     可以暴露多个
  // 如果是多个的情况下  需要进行区分   从这个对象下面去加属性就可以了
    module.exports.syx=add;
    module.exports.syx123=add1;
