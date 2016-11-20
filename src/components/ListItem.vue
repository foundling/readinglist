<template>
    <li 
        class="readinglist-item">

        <aside 
            class="toggle-read-wrapper">
            <i 
                class="fa"
                v-bind:style="itemColor"
                v-on:click="toggleRead"
                v-bind:class="{
                    'fa-bookmark': !read, 
                    'fa-bookmark-o': read
                }">
        </aside>

        <list-header :read="read" :title="item.title"></list-header>

        <aside class="remove-wrapper">
            <i class="fa fa-close"></i>
        </aside>

    </li>
</template>

<style scoped>

    .fa-bookmark,
    .fa-bookmark-o {
        padding: 10px;
    }
    .fa-bookmark {
        background: white;
    }

    li.readinglist-item {

        /* https://github.com/scottjehl/Device-Bugs/issues/8 */
        -webkit-transform: translate3d(0, 0, 0); 
        height: calc(100%/ 5);
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
        name: 'listItem',
        props: ['item', 'index' ],
        created: function() {
        },
        computed: {
            itemColor: function() {
                return {
                    background: this.read ? 'transparent' : appColors[this.index],
                    border: this.read ? '1px solid ' + appColors[this.index] : '1px solid transparent'  
                };
            }
        },
        data: function() {
            return {
                read: false, 
            };
        },
        methods: {
            toggleRead: function() {
                this.read = !this.read;
            }
        },
        components: {
            ListHeader
        },
    }
</script>
