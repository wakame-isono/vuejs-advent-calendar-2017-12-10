// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/app'

import Input from '@/components/input'
import Check from '@/components/check'
import Radio from '@/components/radio'
import Select from '@/components/select'
import Group from '@/components/group'
Vue.component('vue-input', Input)
Vue.component('vue-check', Check)
Vue.component('vue-radio', Radio)
Vue.component('vue-select', Select)
Vue.component('vue-group', Group)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
