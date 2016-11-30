<template>

    <section class="readinglist">
        <ul class="readinglist-list">
            <list-item 
                v-for="(item, index) in list" 
                :item="item" 
                :index="index">
            </list-item>
        </ul>
    </section>

</template>

<style scoped>

    section.readinglist {

        height: calc(90vh);
        padding: 20px; 
        background: whitesmoke;

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

        props: ['list'],
        components: {
            ListItem
        }

    };
</script>
