import App from './App'

// #ifndef VUE3
import Vue from 'vue'

// 引入网络封装 01
// import http from 'pages/api/request.js'
// Vue.prototype.http = http

// 引入网络封装 02
import Http from 'pages/api/uni_request.js'


Vue.config.productionTip = false
Vue.prototype.Http = Http 

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif