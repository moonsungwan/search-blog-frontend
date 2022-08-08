import axios from 'axios';

import { setInterceptors } from './config/interceptors';

const create = url => {
    const instance = axios.create(
        Object.assign({
            baseURL: 'http://localhost:8080/api/v1', // jest로 URL 고정
            headers: { 'Content-Type': 'application/json' },
        }),
    );
    setInterceptors(instance);
    return instance;
};

export const reApi = create(`${process.env.VUE_APP_API_URL}`);
export const account = create(`${process.env.VUE_APP_API_URL}`);

export const blog = create(`${process.env.VUE_APP_API_URL}`);
export const searchHistory = create(`${process.env.VUE_APP_API_URL}`);
export const bookmarkBlog = create(`${process.env.VUE_APP_API_URL}`);
