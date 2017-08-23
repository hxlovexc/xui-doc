import 'assets/xui/css/xui.css'
import 'assets/scss/base.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import xui from 'assets/xui/main'
import sourceCode from 'components/source-code.vue'

Vue.config.productionTip = false

// 类型
Vue.prototype.$types = [
  'primary',
  'success',
  'warning',
  'danger',
  'dark'
]

// 大小
Vue.prototype.$size = [
  'large',
  'default',
  'small',
  'mini'
]

Vue.use(xui)

// 全局引入sourceCode
Vue.component('sourceCode', sourceCode)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
