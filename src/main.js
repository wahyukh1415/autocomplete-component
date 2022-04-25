import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import 'bootstrap'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueApexCharts from "vue3-apexcharts";

library.add(fas)

import '@/styles/main.scss'
import '@/styles/bootstrap.scss'
import 'sweetalert2/src/sweetalert2.scss'

const head = createHead()
const pinia = createPinia()

createApp(App)
  .use(router)
  .use(head)
  .use(pinia)
  .use(VueApexCharts)
  .component('fa', FontAwesomeIcon )
  .mount('#app')
