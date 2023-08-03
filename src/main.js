import '@/assets/main.css';

import { createApp } from 'vue';

import { createPinia } from 'pinia';

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App).use(pinia);

app.config.productionTip = false;

app.mount('#app');
