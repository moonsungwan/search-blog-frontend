import { getSearchHistoryList, registSearchHistory } from '@/api/search-history';

export default {
    actions: {
        async GET_SEARCH_HISTORY_LIST({ commit }) {
            return await getSearchHistoryList();
        },
        async REGIST_SEARCH_HISTORY({ commit }, parameters) {
            return await registSearchHistory(parameters);
        },
    },
};
