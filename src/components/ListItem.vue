<template>
    <li v-bind:style="styleObject" class="readinglist-item">

        <aside class="toggle-read-wrapper">
            <i class="fa fa-bookmark-o"></i>
            <!--
            <i class="fa fa-bookmark"></i>
            -->
        </aside>

        <list-header :title="item.title"></list-header>

        <aside class="remove-wrapper">
            <i class="fa fa-close"></i>
        </aside>

    </li>
</template>

<style scoped>
    li.readinglist-item {

        height: 10vh;
        width: 100%;
        overflow-x: scroll;

        display: flex;
        align-items: center;
        justify-content: center;

        white-space: nowrap;

    }

    aside.toggle-read-wrapper {
        margin-right: auto;
    }

    aside.remove-wrapper {
        margin-left: auto;
    }

    aside.toggle-read-wrapper,
    aside.remove-wrapper {
        width: 20%;    
    }

    a.readinglist-item-link {
        overflow-x: scroll;
    }
</style>

<script>

    import ListHeader from './ListHeader';
    import appColors from '../plugins/colors';

    export default {
        props: ['item', 'index' ],
        created: function() {
        },
        data: function() {
            return {
                styleObject: {
                    background: appColors[this.index]
                },
            };
        },
        components: {
            ListHeader
        },
    }
</script>
