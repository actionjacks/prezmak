import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from "vue3-icon";
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .component("svg-icon", SvgIcon)
  .use(router)
  .mount('#app')
