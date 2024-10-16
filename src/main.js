import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/fonts.css';
import 'flatpickr/dist/flatpickr.min.css';

createApp(App)
  .use(router)
  .mount('#app');
