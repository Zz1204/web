// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 整个项目的入口JS文件
//import 语法就是引入外部文件的 以前require()   module.exports
// import 自定义命名 from "vue"   通过export default 进行暴露


//引入Vue模块
import Vue from 'vue'
//引入根组件
import App from './App'
//引入路由
import router from './router'
//规定一些代码风格
Vue.config.productionTip = false

/* eslint-disable no-new */
//创建vue对象
new Vue({
  el: '#app',
  router,
  //私有注入根组件
  components: { App },
  //模版
  template: '<App/>'
})
