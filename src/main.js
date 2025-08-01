import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import formkitConfig from '../formkit.config'

createApp(App)
.use(router)
.use(plugin, defaultConfig(formkitConfig))
.mount('#app')
