import { login, signUp, logout } from '@/api/account';

export default {
    actions: {
        async ACCOUNT_LOGIN({ commit }, parameters) {
            return await login(parameters);
        },
        async ACCOUNT_SIGN_UP({ commit }, parameters) {
            return await signUp(parameters);
        },
        async ACCOUNT_LOGOUT({ commit }) {
            return await logout();
        },
    },
};
