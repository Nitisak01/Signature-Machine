import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCKqml_mnDWUJCEF2uehR5kuB4PQxk8XJs",
  authDomain: "signature-machine.firebaseapp.com",
  databaseURL: "https://signature-machine.firebaseio.com",
  projectId: "signature-machine",
  storageBucket: "signature-machine.appspot.com",
  messagingSenderId: "586692671165",
  appId: "1:586692671165:web:4bede0eaac512bcdb0e9d4",
  measurementId: "G-VLFH8N17FV"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
