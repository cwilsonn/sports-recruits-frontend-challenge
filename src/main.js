import '@/assets/main.css';

import { createApp } from "vue";

import App from "./App.vue";
import { createPinia } from 'pinia'

const app = createApp(App).use(createPinia());

app.config.productionTip = false;

app.mount('#app');
