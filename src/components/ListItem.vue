<template>
    <li 
        v-bind:style="itemColor"
        class="readinglist-item">

        <aside class="toggle-read-write-wrapper">
            <i 
                v-on:click="toggleModal"
                class="fa fa-pencil">
            </i>
        </aside>

        <list-header 
            :read="read" 
            :title="item.title">
        </list-header>

        <aside class="remove-wrapper">
            <i 
                class="fa fa-close"
                v-bind:class="{ 'grayed-out': !read }">
            </i>
        </aside>
    </li>
</template>

<style scoped>

    .grayed-out {
        opacity: 0.2;
    }
    .fa-bookmark-o,
    .fa-pencil {
        width: 40%;
        margin: 0px;
        padding: 0px;
    }

    .emphasis {
        color: red;
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
        data: function() {
            return {
                read: false, 
                editMode: false
            };
        },
        computed: {
            itemColor: function() {
                return {
                    background: this.read ? 'transparent' : appColors[this.index + 4],
                };
            }
        },
        methods: {
            toggleModal: function() {
                this.$store.dispatch('toggleModal');
            },
            toggleRead: function() {
                this.read = !this.read;
            }
        },
        components: {
            ListHeader
        },
    }
</script>
