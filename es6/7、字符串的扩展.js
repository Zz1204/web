//  字符串的扩展

/*
var a=10;
//console.log('我今年'+a+'岁');
console.log(`我今年${a}岁`);

let html='<ul>' +
    '<li>' +
    '</li>' +
    '</ul>';

let html=`<ul>
    <li></li>
    <li></li>
    <li></li>
    </ul>`
*/


// repeat();  重复

let str = 'aqwer';
let str1 = str.repeat(10);
// console.log(str1)


// includes() 包含  包含为true   否则为false
// startswith() 判断是否以什么开头  如果包含，则为true 否则为false
// endswith()   判断是否以什么结尾  如果包含，则为true 否则为false

// console.log(str.endsWith('r'))



// 对象的扩展  object

// Object.is();   判断两个值是不是长得相似
// console.log(Object.is(2,+2));

// Object.assign();  用于对象的合并，将原对象的所有可枚举属性，复制到目标对象  相同的属性进行替换
let json = {a:1};
let json1 = {a:2,b:3,c:4};
let json2 = {d:5,b:6};
Object.assign(json,json1,json2);
// console.log(json,json1,json2)



// 函数的扩展  默认参数   如果没有传递实参，那么形参就会遵循默认的值
function aa (a=10,b=20) {
    console.log(a+b);
};
aa(100,202);



// 箭头函数    ()=>{}   在箭头函数里，没有this   this指的就是调用的函数的
setTimeout(function () {
 console.log(this);    //指的window
},2000);

setTimeout(()=>{
    console.log(this);
},3000);