import { getBlogList } from '@/api/blog';

export default {
    actions: {
        async GET_BLOG_LIST({ commit }, parameters) {
            return await getBlogList(parameters);
        },
    },
};
