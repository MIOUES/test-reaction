import Vue from 'vue'
import App from './App.vue'

// vue-echart
// import echarts from 'echarts'
import VueECharts from 'vue-echarts'
Vue.component('v-chart', VueECharts)

// element-ui
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button)

import './main.css'

new Vue({
  render: (h) => h(App)
}).$mount('#app')
