import { searchHistory } from './index';

export const getSearchHistoryList = async () => {
    return await searchHistory.get(`/search-history`);
};

export const registSearchHistory = async parameter => {
    return await searchHistory.post(`/search-history`, JSON.stringify(parameter));
};
