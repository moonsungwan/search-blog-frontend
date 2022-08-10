import { deleteSearchWordToStorage } from '@/utils/storage';
import { account } from './index';

export const login = async parameter => {
    return await account.post(`/account/login`, JSON.stringify(parameter));
};

export const signUp = async parameter => {
    return await account.post(`/account/sign-up`, JSON.stringify(parameter));
};

export const logout = async () => {
    deleteSearchWordToStorage();
    return await account.post(`/account/logout`);
};
