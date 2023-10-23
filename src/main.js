import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'
import Pagination from '@/components/pageation/index.vue'

import '@/icons' // icon
import '@/permission' // permission control
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
import VueQuillEditor from 'vue-quill-editor'

// 引入富文本，样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 自定义工具
import toolcomm from './utils/comm.js'
console.log(toolcomm, 'toolcomn')
Object.keys(toolcomm).forEach(item => {
  Vue.prototype[`${'$' + item}`] = toolcomm[item]
})
// 自定义指令
import directiveList from '@/utils/directive.js'
Object.keys(directiveList).forEach(item => {
  Vue.directive('' + item, directiveList[item])
})
import lodash from 'lodash'
// 组件
Vue.component('Pagination', Pagination)
Vue.use(ElementUI).use(VueQuillEditor)
Vue.prototype.$lodash = lodash
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
