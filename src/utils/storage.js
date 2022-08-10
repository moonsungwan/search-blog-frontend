const headerName = 'Authorization';

export const saveTokenToStorage = value => {
    localStorage.setItem(headerName, value);
};

export const deleteTokenToStorage = () => {
    localStorage.setItem(headerName, '');
};

export const getTokenFromStorage = () => {
    return localStorage.getItem(headerName);
};

export const saveSearchWordToStorage = value => {
    sessionStorage.setItem('searchWord', value);
};

export const getSearchWordToStorage = value => {
    return sessionStorage.getItem('searchWord');
};
