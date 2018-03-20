//  es6  新增的数据结构    Map
//    是用来存储不重复的key的hash结构，不同于集合（set）的是，字典使用的是[键，值]的形式来储存数据的


//创建map
let map=new Map([['a',1],['b',2],['c',3]]);  // php =>
// php  数组  关联数组 array('a'=>1,'b'=>2,'c'=>3)   索引数组 array(1,2,3,4)
console.log(map)
// 属性    长度  size
console.log(map.size)

//添加
// set(key,value) 设置键名key对应的键值为value，
// 然后返回整个map结构，如果key已经有值，则键值会被更新，否则就新生成该键
 map.set('name','zxc').set('age',20).set('sex','boy');
console.log(map)

//获取   查看   get方法读取key对应的键值，如果找不到key，返回undefined
console.log(map.get('d'))

// 删除    delete（key） 删除某个键  返回true 如果删除失败，返回false
console.log(map.delete('c'))

// has(key)  返回一个布尔值，表示某个键是否在当前map对象之中
console.log(map.has('a'))

// clear()   清除所有数据  没有返回值
// map.clear()
// console.log(map)

//keys()  返回所有键名的遍历器
console.log(map.keys());

// values()  返回所有键值的遍历器
console.log(map.values());


//  NaN==NaN   空json不相等



//扩展运算符   ...
// let str='zxczxc';
// let arr=[...str];
// console.log(arr)
 //   [ 'z', 'x', 'c', 'z', 'x', 'c' ]

// let arr1=[3,'aa','bb',4321,'cc'];
// console.log([...new Set(arr1)]);
// console.log([...new Map([
//     ['a',1],
//     ['b',2],
//     ['c',3]
// ])]);


// let json={
//     name:'zxc',
//     sex:'boy'
// };
//
// let json1={
//     age:20,
//     phone:1234567,
//     ...json
// };
// console.log(json1)

// 收缩的功能
 function aa(a,b,...arr){
     // console.log(a+b+);
 }
 aa(10,20,30,40);


 // for...of  循环
// let arr=[1,2,3,4,5];    // forEach()
// for(let attr of arr){
//     console.log(attr)
// }