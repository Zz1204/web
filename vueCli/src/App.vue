<!--相当于以前的html代码-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/index">index</router-link>
    <router-link :to="{name:'shopping'}">shop</router-link>
    <!--路由容器-->
    <router-view/>
  </div>
</template>
<!--相当于JS文件-->
<script>
  //默认导出
  export default {
    name: 'App'
  }
</script>
<!--相当于CSS文件-->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

