import { getBookmarkBlogList, registBookmarkBlog, deleteBookmarkBlog } from '@/api/bookmark-blog';

export default {
    actions: {
        async GET_BOOKMARK_BLOG_LIST({ commit }, parameters) {
            return await getBookmarkBlogList(parameters);
        },
        async REGIST_BOOKMARK_BLOG({ commit }, parameters) {
            return await registBookmarkBlog(parameters);
        },
        async DELETE_BOOKMARK_BLOG({ commit }, parameters) {
            return await deleteBookmarkBlog(parameters);
        },
    },
};
