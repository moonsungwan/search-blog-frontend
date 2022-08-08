import { getTokenFromStorage } from '@/utils/storage.js';

export const requireAuth = () => (to, from, next) => {
    if (getTokenFromStorage()) {
        return next();
    }
    next('/blog/list');
};
