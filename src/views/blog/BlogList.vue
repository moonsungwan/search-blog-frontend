<template
    ><div>
        <div class="content_search">
            <h2 class="screen_out">검색</h2>
            <div class="wrap_comm">
                <strong class="tit_search">블로그 검색 서비스</strong>
                <div class="search_form">
                    <div id="divTfSeach" class="box_tf box_search" style="width:90%">
                        <input
                            type="search"
                            id="tfSearch"
                            class="tf_g"
                            placeholder="검색어를 입력 주세요"
                            maxlength="50"
                            v-model="parameters.query"
                            v-on:keyup.enter="enterQuery()"
                        />
                        <button
                            style="z-index: 20;"
                            id="btn_del"
                            type="button"
                            class="btn_del"
                            v-on:click="deleteQuery()"
                        >
                            <span class="ico_del">삭제</span>
                        </button>
                        <img
                            style="right:-120px;"
                            src="@/assets/images/emot_search_09.gif"
                            class="emot_search"
                            alt=""
                        />
                    </div>
                    <div class="dimmed_layer" style="display: none;"></div>
                </div>
            </div>
        </div>
        <article id="mainContent" class="content_article">
            <div class="tab_main">
                <div class="wrap_comm">
                    <ul class="list_tab list_tab_type1">
                        <li
                            :class="{ on: parameters.sort === item.value }"
                            v-for="item in sorts"
                            :key="item.title"
                        >
                            <button
                                type="button"
                                class="btn_tab"
                                role="tab"
                                v-on:click="changeSort(item.value)"
                            >
                                <span id="spanLageType0" class="txt_btn">{{ item.title }}</span
                                ><span class="ico_kakaopay ico_next"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <search-history ref="history"></search-history>
            <div id="divContents" class="contents_comm contents_faq" style="display: block;">
                <div class="wrap_comm">
                    <base-table
                        :list="this.list"
                        @OnGoDetail="goDetail"
                        @OnRegistBookmark="registBookmark"
                    />
                    <pagination
                        v-model="parameters.page"
                        :records="parameters.records"
                        @paginate="changePage"
                    />
                </div>
            </div>
        </article>
    </div>
</template>
<script>
import SearchHistory from '@/views/search-history/SearchHistory';
export default {
    components: {
        SearchHistory,
    },
    data() {
        return {
            list: [],
            sorts: this.$constants.SORTS,
            parameters: {
                query: '',
                page: 1,
                size: 25,
                sort: 'accuracy',
                records: 0,
            },
        };
    },
    methods: {
        validate() {
            if (this.$utils.isEmpty(this.parameters.query)) {
                this.$toast('검색어를 입력해주세요.');
                return false;
            }
            return true;
        },
        changeSort(sort) {
            this.parameters.sort = sort;

            this.getList();
        },
        changePage(page) {
            this.parameters.page = page;
            this.getList();
        },
        async enterQuery() {
            this.registSearchHistory();
            this.getList();
        },
        async registSearchHistory() {
            await this.$store.dispatch('REGIST_SEARCH_HISTORY', {
                searchWord: this.parameters.query,
            });
        },
        async getList() {
            if (!this.validate()) {
                return false;
            } else {
                const { data } = await this.$store.dispatch('GET_BLOG_LIST', this.parameters);
                this.list = data.documents;
                this.parameters.records = parseInt(data.meta.pageable_count);

                this.$refs.history.getList();
            }
        },
        goDetail(url) {
            window.open(url);
        },
        async registBookmark(data) {
            const { message } = await this.$store.dispatch('REGIST_BOOKMARK_BLOG', {
                bookmarkTitle: data.title,
                bookmarkUrl: data.url,
            });
            this.$toast(message);
        },
    },
};
</script>
