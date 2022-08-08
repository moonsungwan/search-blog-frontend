import { blog } from './index';

export const getBlogList = async params => {
    return await blog.get(`/blog`, {
        params: params,
    });
};
