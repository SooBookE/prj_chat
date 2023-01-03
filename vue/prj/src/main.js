import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Vue from 'vue'
// import io from 'socket.io-client'
// const socket = io('http://localhost:3000')

// Vue.prototype.$socket = socket

createApp(App).use(store).use(router).mount('#app')
