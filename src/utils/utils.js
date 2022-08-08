import { getTokenFromStorage } from '@/utils/storage.js';

export const isEmpty = value => {
    if (value === null) return true;
    if (typeof value === 'undefined') return true;
    if (typeof value === 'string' && value === '') return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    if (Array.isArray(value) && value.length < 1) return true;
    if (
        typeof value === 'object' &&
        value.constructor.name === 'Object' &&
        Object.keys(value).length < 1 &&
        Object.getOwnPropertyNames(value) < 1
    )
        return true;
    if (
        typeof value === 'object' &&
        value.constructor.name === 'String' &&
        Object.keys(value).length < 1
    )
        return true;

    return false;
};

export const isLogin = value => {
    return !isEmpty(getTokenFromStorage());
};

export const formatDate = value => {
    if (!value) return;
    return new Date(value).toLocaleString();
};
