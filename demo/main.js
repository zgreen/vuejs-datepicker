import Vue from 'vue'
import Demo from './Demo.vue'

Vue.config.debug = true;


/* eslint-disable no-new */
let vm = new Vue({
  el: 'body',
  components: { Demo }
})
