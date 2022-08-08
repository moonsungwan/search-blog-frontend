<template>
    <header class="doc_header">
        <nav id="gnbContent" class="doc_gnb">
            <ul class="list_menu">
                <li>
                    <button v-if="!$utils.isLogin()" class="link_menu">
                        <span v-on:click="login()" class="txt">로그인</span>
                    </button>
                    <button v-else class="link_menu" style="width:100%">
                        <span v-on:click="goBlogList()" class="txt">블로그 검색</span>&nbsp;
                        <span v-on:click="goBookmark()" class="txt">북마크 목록</span>&nbsp;
                        <span v-on:click="logout()" class="txt">로그아웃</span>
                    </button>
                </li>
            </ul>
        </nav>
        <div class="bg_header"></div>
    </header>
</template>
<script>
import { deleteTokenToStorage } from '@/utils/storage.js';
export default {
    name: 'TheHeader',
    methods: {
        login() {
            this.$router.push({ name: 'Login' });
        },
        async logout() {
            const { message, data } = await this.$store.dispatch('ACCOUNT_LOGOUT');
            if (data) {
                this.$toast(message);

                deleteTokenToStorage();
                this.$router.go({ name: 'Login' });
            }
        },
        goBlogList() {
            this.$router.push({ name: 'BlogList' });
        },
        goBookmark() {
            this.$router.push({ name: 'BookmarkBlogList' });
        },
    },
};
</script>
<style></style>
