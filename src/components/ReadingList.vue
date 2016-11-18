<template>

    <section class="readinglist">
        <ul class="readinglist-list">
            <list-item v-for="list in readinglists" :title="list.title"></list-item>
        </ul>
    </section>

</template>

<style scoped>

    section.readinglist {

        height: 90vh;
        padding: 40px 40px; 
        background: whitesmoke;

    }

    ul.readinglist-list {

        width: 100%;
        height: calc(90vh - 80px);
        max-height: calc(90vh - 80px);

        overflow-y: scroll;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;

        margin: 0 auto;
        padding: 0px;

        box-shadow: 4px 4px 0px;

        list-style-type: none;

        text-align: center;
    }

</style>

<script>
    import ListItem from './ListItem';

    export default {
        components: {
            ListItem
        },
    };
</script>
