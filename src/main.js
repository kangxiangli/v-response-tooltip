import Vue from 'vue'
import App from './App.vue'
import { Tooltip} from 'element-ui';
import 'element-ui/lib/theme-chalk/tooltip.css'
Vue.use(Tooltip)

new Vue({
  el: '#app',
  render: h => h(App)
})
