import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import PrimeVue from "primevue/config";

Axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

createApp(App).use(store).use(router).use(PrimeVue).mount('#app')
