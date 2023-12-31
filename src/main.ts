import { createApp } from 'vue';
import './style/index.css';
import App from './App.vue';
import router from './router';
import 'normalize.css';
import store from './store';

createApp(App).use(router).use(store).mount('#app');
