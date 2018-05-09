// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router1 from './router'
import store1 from './store/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router1,
  store: store1,
  components: {
    App
  },
  template: '<App/>'
})
