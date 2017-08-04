import Vue from 'vue'
import App from './App.vue'

import Scrollbar from '../../src/index.js'
Vue.component(Scrollbar.name, Scrollbar)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
