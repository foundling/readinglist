<template>

    <section class="readinglist">
        <ul class="list-tabs">
            <li 
                v-on:click="setActiveList('working')"
                v-bind:class="{ 
                    'active-list': type === 'working' 
                }"
                class="list-tab working">working</li>
            <li 
                v-on:click="setActiveList('saved')"
                v-bind:class="{ 
                    'active-list': type === 'saved' 
                }"
                class="list-tab saved">saved</li>
        </ul>
        <ul
            class="readinglist-list">
            <list-item 
                v-for="(item, index) in readingList" 
                :item="item" 
                :index="index">
            </list-item>
        </ul>

    </section>

</template>

<style scoped>


    .active-list {
        background: aquamarine;
    }
    section.readinglist {

        height: 90vh;
        padding: 10px; 
        background: whitesmoke;

    }

    li.list-tab {
        display: inline-block;
    }
    ul.readinglist-list {

        width: 100%;
        height: 100%;
        background: white;

        overflow-y: scroll;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;

        margin: 0 auto;
        padding: 0px;
        margin-bottom: 4px;

        box-shadow: 4px 4px 0px;

        list-style-type: none;

        text-align: center;
    }

</style>

<script>
    import ListItem from './ListItem';

    export default {

        name: 'ReadingList',
        props: [
            'listName'
        ],
        components: {
            ListItem
        },
        computed: {
            readingList() {
                const getter = `${this.listName}List`; 
                return this.$store.getters[getter];
            }
        },
        methods: {
            setActiveList(listName) {
                this.$store.dispatch('setActiveList', {
                    listName: listName
                });
            }
        }

    };
</script>
