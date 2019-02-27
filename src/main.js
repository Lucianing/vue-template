import Vue from 'vue'
import App from '@/app'
import router from '@/router'
import store from '@/store'
import ajax from '@/utils/ajax'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css'
import '@/assets/style/index.scss'

import '@/filters/_globals'
import '@/directives/_globals'
import '@/components/_globals'

Vue.use(ElementUI, {
  size: 'medium'
})

Vue.prototype.$ajax = ajax

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
