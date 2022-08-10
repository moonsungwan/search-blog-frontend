import Vue from 'vue';
import router from '@/router';

import qs from 'qs';

import {
    getTokenFromStorage,
    deleteTokenToStorage,
    deleteSearchWordToStorage,
} from '@/utils/storage';

let setInterceptors = instance => {
    instance.interceptors.request.use(
        config => {
            if (localStorage.getItem('Authorization')) {
                config.headers['Authorization'] = getTokenFromStorage();
            }
            config.paramsSerializer = params => {
                return !params ? {} : qs.stringify(params, { arrayFormat: 'repeat' });
            };
            return config;
        },
        error => Promise.reject(error.response),
    );
    instance.interceptors.response.use(
        response => {
            if (response.data.error) {
                deleteTokenToStorage();
            }
            return response.data;
        },
        async error => {
            if (!error.response) {
                console.log('인터넷 연결이 끊켯습니다.');
                deleteTokenToStorage();
                router.push('/login');
            }

            const response = error.response;
            const errorCode = response.status;
            if (errorCode == 401) {
                deleteTokenToStorage();
                deleteSearchWordToStorage();
                Vue.$toast.error(response.data.message, {
                    timeout: 2000,
                });
                router.push('/login');
            } else if (errorCode == 400) {
                let message = '';
                Object.keys(response.data).forEach(function(v) {
                    message = response.data[v];
                });
                Vue.$toast.error(message, {
                    timeout: 2000,
                });
            } else {
                Vue.$toast.error(response.data.message, {
                    timeout: 2000,
                });
            }

            await Promise.reject(response);
        },
    );
    return instance;
};

export { setInterceptors };
