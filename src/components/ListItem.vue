<template>
    <li 
        v-bind:style="itemColor"
        class="readinglist-item">

        <aside 
            class="toggle-read-write-wrapper">
            <i 
                class="fa fa-bookmark"
                v-on:click="toggleRead">
            </i>
            <i 
                v-on:click="toggleRead"
                v-bind:class="{ invisible: read }"
                class="fa fa-pencil">
            </i>
        </aside>

        <list-header 
            :read="read" 
            :title="item.title">
        </list-header>

        <aside class="remove-wrapper">
            <i 
                v-bind:class="{emphasis: read}"
                class="fa fa-close">
            </i>
        </aside>

    </li>
</template>

<style scoped>

    .invisible {
        visibility: hidden;
    }
    .fa-bookmark,
    .fa-bookmark-o {
        padding: 10px;
    }
    .fa-bookmark {
        background: white;
    }
    .emphasis {
        color: red;
    }

    aside .emphasis {
        opacity: 1;
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

    aside.toggle-read-write-wrapper {

        display: flex;
        align-items: center;
        justify-content: center;

        width: 20%;

    }

    aside.remove-wrapper {
        margin-left: auto;
        opacity: 0.2;
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
