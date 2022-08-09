import { getTokenFromStorage } from '@/utils/storage.js';

export const requireAuth = () => (to, from, next) => {
    if (isEmpty(getTokenFromStorage())) {
        return next({ name: 'Login' });
    } else {
        return next({ name: 'BlogList' });
    }
};
