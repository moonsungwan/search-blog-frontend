<template>
    <div class="container">
        <div class="wrapper">
            <table style="position: absolute; width: 15%;">
                <h3>인기검색어 Top10</h3>
                <tbody>
                    <template v-if="!$utils.isEmpty(this.list)">
                        <tr v-for="item in this.list" :key="item.id">
                            <td
                                class="rank"
                                style="cursor: pointer;"
                                v-on:click="search(item.searchWord)"
                            >
                                {{ item.searchWord }}
                            </td>
                            <td class="points">{{ item.searchCount }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchHistory',
    data() {
        return {
            list: [],
        };
    },
    created() {
        this.getList();
    },
    methods: {
        search(searchWord) {
            this.$emit('OnSearchHistory', searchWord);
        },
        async getList() {
            const { data } = await this.$store.dispatch('GET_SEARCH_HISTORY_LIST');
            this.list = data;
        },
    },
};
</script>
