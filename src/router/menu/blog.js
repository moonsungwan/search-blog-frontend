export default {
    path: '/blog',
    name: 'Blog',
    component: {
        render(c) {
            return c('router-view');
        },
    },
    children: [
        {
            path: '/blog/list',
            name: 'BlogList',
            component: () => import('@/views/blog/BlogList.vue'),
        },
    ],
};
