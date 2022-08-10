const headerKey = 'Authorization';
const searchKey = 'searchWord';

export const saveTokenToStorage = value => {
    localStorage.setItem(headerKey, value);
};

export const deleteTokenToStorage = () => {
    localStorage.setItem(headerKey, '');
};

export const getTokenFromStorage = () => {
    return localStorage.getItem(headerKey);
};

export const saveSearchWordToStorage = value => {
    sessionStorage.setItem(searchKey, value);
};

export const getSearchWordToStorage = value => {
    return sessionStorage.getItem(searchKey);
};

export const deleteSearchWordToStorage = value => {
    return sessionStorage.setItem(searchKey, '');
};
