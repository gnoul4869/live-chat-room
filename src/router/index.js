import { createRouter, createWebHistory } from 'vue-router';
import { fireAuth } from '@/firebase/config.js';
import ChatroomView from '@/views/ChatroomView.vue';
import HomeView from '../views/HomeView.vue';

const requireNoAuth = (to, from, next) => {
    const user = fireAuth.currentUser;
    if (user) {
        next({ name: 'Chatroom' });
    }
    next();
};

const requireAuth = (to, from, next) => {
    const user = fireAuth.currentUser;
    if (!user) {
        next({ name: 'Home' });
    }
    next();
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        beforeEnter: requireNoAuth,
    },
    {
        path: '/chatroom',
        name: 'Chatroom',
        component: ChatroomView,
        beforeEnter: requireAuth,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
