import Vue from 'vue'
//引入路由插件
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shopping from '@/components/shopping'
//一定要使用use 加载插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/shop',
      name: 'shopping',
      component: shopping
    }
  ]
})
