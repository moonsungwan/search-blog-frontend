<template
    ><div>
        <article id="mainContent" class="content_article">
            <div id="divContents" class="contents_comm contents_faq" style="display: block;">
                <div class="wrap_comm">
                    <bookmark-table
                        :list="this.list"
                        @OnGoDetail="goDetail"
                        @OnDeleteBookmark="deleteBookmark"
                    />
                </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            const { data } = await this.$store.dispatch('GET_BOOKMARK_BLOG_LIST');
            this.list = data;
        },
        goDetail(url) {
            window.open(url);
        },
        async deleteBookmark(id) {
            const { message } = await this.$store.dispatch('DELETE_BOOKMARK_BLOG', id);
            this.$toast(message);

            this.getList();
        },
    },
};
</script>
