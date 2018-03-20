// es6中新增的set结构   存储数据的
//  集合的基本概念：集合是有一组无序且唯一（既不能重复）的项目组成的
// 这个数据结构使用了与有限集合相同的数字概念，应用在计算机的数据结构中
// 特点：key和value相同，没有重复的value
// ES6提供了数据结构Set，它类似于数组，但是成员的值都是唯一的，没有重复的值。


//创建set
    const set=new Set([1,2,3,4]);
    console.log(set)
//属性
    //长度  size
    // console.log(set.size)

    //添加  add
            set.add('a').add('b');
            console.log(set)

    // 删除 delete(value)  啊删除指定数据，返回一个布尔值，表示删除是否成功
            console.log(set.delete('c'));
            console.log(set)

    // 查 set.has(value)   判断该值是否为set的成员，返回一个布尔值
            console.log(set.has('c'));

    // set.clear()   清除所有数据   没有返回值
            set.clear()
            console.log(set)