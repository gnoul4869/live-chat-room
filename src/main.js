import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { onAuthStateChanged } from '@firebase/auth';
import { fireAuth } from '@/firebase/config';

import '@/assets/main.css';

let app;

onAuthStateChanged(fireAuth, () => {
    if (!app) {
        app = createApp(App).use(router).mount('#app');
    }
});
