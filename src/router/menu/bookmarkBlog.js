export default {
    path: '/bookmark-blog',
    name: 'BookmarkBlog',
    component: {
        render(c) {
            return c('router-view');
        },
    },
    children: [
        {
            path: '/bookmark-blog/list',
            name: 'BookmarkBlogList',
            component: () => import('@/views/bookmark-blog/BookmarkBlogList.vue'),
        },
    ],
};
