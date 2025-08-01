import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import { es } from '@formkit/i18n'

createApp(App)
.use(router)
.use(plugin, defaultConfig({
    locales: { es },
    locale: 'es',
  }))
.mount('#app')
