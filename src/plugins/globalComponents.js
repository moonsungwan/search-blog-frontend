import TheHeader from '@/components/common/TheHeader';
import BlogTable from '@/components/BlogTable';
import BookmarkTable from '@/components/BookmarkTable';
import Pagination from 'vue-pagination-2';

export default {
    install(Vue) {
        Vue.component(TheHeader.name, TheHeader);
        Vue.component(BlogTable.name, BlogTable);
        Vue.component(BookmarkTable.name, BookmarkTable);
        Vue.component('pagination', Pagination);
    },
};
