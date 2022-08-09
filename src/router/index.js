import Vue from 'vue';

import VueRouter from 'vue-router';

import { getTokenFromStorage } from '@/utils/storage.js';
import { isEmpty } from '@/utils/utils.js';

import { requireAuth } from './require';
import MenuBlog from './menu/blog';
import MenuBookmarkBlog from './menu/bookmarkBlog';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        beforeEnter: requireAuth,
    },
    {
        path: '/blog/list',
        component: () => import('@/layout/DefaultLayout'),
        children: [MenuBlog, MenuBookmarkBlog],
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/account/Login.vue'),
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('@/views/account/SignUp.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes,
});

export default router;
