<template>
  <div>
    <h1>我是商品的界面</h1>
    <HelloWorld></HelloWorld>
    <img src="../assets/logo.png" alt="">
    <ul>
      <li v-for="item in arr">{{item}}</li>
    </ul>
  </div>
</template>
<style scoped>
  img{
    width: 400px;
    margin: 200px auto;
  }
  h1{
    font-size: 40px;
    color: red;
  }
</style>
<script>
  import HelloWorld from '@/components/HelloWorld';
  export default{

    name:'shopping',
    //数据
    data(){
      return {
        arr:[1,2,3,4,5]
      }
    },
    components:{HelloWorld}
  }
</script>
