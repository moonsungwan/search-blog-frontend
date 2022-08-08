<template>
    <div>
        <template v-if="!$utils.isEmpty(this.list)">
            <div class="faq_wrap">
                <div class="faq_comm" v-for="item in this.list" :key="item.id">
                    <div class="faq_head">
                        <button class="btn_status" v-on:click="deleteBookmark(item.id)">
                            <span>북마크 삭제</span>
                        </button>
                        <a
                            v-on:click="goDetail(item.bookmarkUrl)"
                            class="tit_faq"
                            style="width:90%; cursor:pointer"
                            ><strong style="width:5%" v-html="item.bookmarkTitle"></strong
                        ></a>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="blank_comm">
                <span class="ico_blank"></span>
                <p class="desc_blank desc_g">
                    검색결과가 없습니다
                </p>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name: 'BookmarkTable',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        goDetail(url) {
            this.$emit('OnGoDetail', url);
        },
        deleteBookmark(id) {
            this.$emit('OnDeleteBookmark', id);
        },
    },
};
</script>
