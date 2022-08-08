export const saveTokenToStorage = async value => {
    localStorage.setItem('Authorization', value);
};

export const deleteTokenToStorage = async () => {
    localStorage.setItem('Authorization', '');
};

export const getTokenFromStorage = () => {
    return localStorage.getItem('Authorization');
};
