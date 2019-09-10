
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home'
import List from './components/list/list'
import Order from './components/order/order'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/list', name: 'List', component: List },
      { path: '/order',  name: 'Order', component: Order}
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})