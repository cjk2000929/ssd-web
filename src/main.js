import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Message } from 'element-ui'

//导入全局样式表
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$message = Message
Vue.config.productionTip = false
Vue.use(ElementUI)
var EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
