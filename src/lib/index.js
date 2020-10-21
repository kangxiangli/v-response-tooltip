import vResponseTooltip from './v-response-tooltip.vue'
const vResponseTooltip = {
  install: function(Vue) {
    Vue.component('vSelectTree', vResponseTooltip)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vResponseTooltip)
}
export default vResponseTooltip
