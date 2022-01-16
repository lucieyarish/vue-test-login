import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

const app = createApp(App)

//Make Axios available to all components
app.provide('$axios', axios);

const token = localStorage.getItem('token')

//Set the Authorization on Aios header to our token 
//so that our requests can be processed if a token is required
// -> no need to set token everytime we want to make a request
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
    //Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

app.use(store).use(router).mount('#app')


