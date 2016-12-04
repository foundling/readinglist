<template>

    <section class="readinglist">
        <ul class="list-tabs">
            <li 
                v-bind:class="{ 
                    'active-list': listName === 'working' 
                }"
                class="list-tab working">
                </li>
            <li 
                v-on:click="toggleActiveList('saved')"
                v-bind:class="{ 
                    'star-active': listName === 'saved'
                }"
                class="list-tab saved">
                    <i class="starred-list fa fa-star-o"></i>
            </li>
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

    .star-active {
        background: gold;    
    }
    .starred-list {
        padding: 5px;
    }
    section.readinglist {

        height: 85vh;
        padding: 5px 10px 10px 10px; 
        background: whitesmoke;

    }

    ul.list-tabs {
        height: 5vh;
        display: flex;
        align-items: center;
    }

    li.list-tab {
        margin-right: 5px;
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
            toggleActiveList(listName) {
                this.$store.dispatch('toggleActiveList');
            }
        }

    };
</script>
