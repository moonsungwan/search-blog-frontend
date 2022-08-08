import Vue from 'vue';
import Vuex from 'vuex';

import account from './modules/account';
import blog from './modules/blog';
import searchHistory from './modules/search-history';
import bookmarkBlog from './modules/bookmark-blog';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account,
        blog,
        searchHistory,
        bookmarkBlog,
    },
});
