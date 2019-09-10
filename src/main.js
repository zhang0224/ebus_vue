import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import MintUI from 'mint-ui'
import FastClick from 'fastclick'
FastClick.attach(document.body)
import 'mint-ui/lib/style.css'
import router from './router'

Vue.use(MintUI)
Vue.use(router)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
