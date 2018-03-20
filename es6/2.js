//  解构赋值
    // 1、数组的解构赋值
    // 2、对象的解构赋值
        // var
        // var a=10,b=20,c=30;
        // console.log(a,b,c)

    //数组赋值
    // let [a,b,c]=[1,2,3];
    // console.log(a,b,c)


    //对象的解构赋值
    json={
        name:'zxc',
        age:20,
        sex:'boy'
    };

    // let name=json.name;
    // let age=json.age;
    // let sex=json.sex;

    // let {name,age,sex}=json;
    // console.log(name,age,sex)

    let {a:a,b:b}={a:1,b:2}
    console.log(a,b)