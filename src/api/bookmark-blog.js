import { bookmarkBlog } from './index';

export const getBookmarkBlogList = async params => {
    return await bookmarkBlog.get(`/bookmark-blog`, {
        params: params,
    });
};

export const registBookmarkBlog = async parameter => {
    return await bookmarkBlog.post(`/bookmark-blog`, JSON.stringify(parameter));
};

export const deleteBookmarkBlog = async id => {
    return await bookmarkBlog.delete(`/bookmark-blog/${id}`);
};
