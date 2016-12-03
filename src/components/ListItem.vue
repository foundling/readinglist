<template>
    <li 
        v-bind:style="{ background: item.color }"
        class="readinglist-item">

        <aside class="toggle-read-write-wrapper">

            <button 
                v-on:click="openModal"
                class="edit-button">
                <i class="fa fa-pencil"></i>
            </button>

            <button 
                v-on:click="toggleRead"
                class="bookmark-button">
                <i 
                    class="fa"
                    v-bind:class="{'fa-bookmark-o': read, 'fa-bookmark': !read }"></i>
            </button>

        </aside>

        <list-header 
            :read="read" 
            :title="item.title"
            :link="item.link">
        </list-header>

        <aside class="remove-wrapper">
            <i 
                v-on:click="removeListItem"
                class="fa fa-close"
                v-bind:class="{ 'grayed-out': !read }">
            </i>
        </aside>
    </li>
</template>

<style scoped>

    button {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        margin: 0px;
        padding: 0px;
        background: none;
    }
    button:focus {
        outline: none;
    }
    button.edit-button {
    }

    i {
        margin: 0px;
        padding: 0px;
        font-size: 1.3em;
    }

    .grayed-out {
        opacity: 0.8;
    }

    li.readinglist-item {

        /*  
            https://github.com/scottjehl/Device-Bugs/issues/8 
        */
        -webkit-transform: translate3d(0, 0, 0); 
        height: calc(100% / 5);
        width: 100%;
        overflow-x: scroll;
        margin: 0px;
        padding: 0 5%;

        display: flex;
        align-items: center;
        justify-content: center;

        white-space: nowrap;

    }

    aside.toggle-read-write-wrapper {

        height: 100%;
        width: 20%;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    aside.remove-wrapper {
        margin-left: auto;
    }

    aside.toggle-read-wrapper,
    aside.remove-wrapper {
        width: 15%;    
    }

    a.readinglist-item-link {
        overflow-x: scroll;
    }
</style>

<script>

    import ListHeader from './ListHeader';
    import appColors from '../plugins/colors';

    export default {
        name: 'ListItem',
        props: ['item', 'index' ],
        computed: {
            read: function() {
                return this.$store.state.readingLists.saved[this.index].read;
            },
            itemColor: function() {
                return {
                    background: this.read ? 'transparent' : appColors[this.index + 4],
                };
            },
        },
        methods: {

            toggleRead: function() {

                const data = {
                    index: this.index,
                    read: !this.read
                };

                this.$store.dispatch('toggleRead', data);
            },

            openModal: function() {

                const data = {
                    modalType: 'EditModal', 
                    listType: 'saved',
                    listItemIndex: this.index
                };

                this.$store.dispatch('openModal', data);

            },
            removeListItem: function() {
                const data = {
                    listName: 'saved',
                    index: this.index
                };
                console.log(this.index);
                this.$store.dispatch('removeListItem', data);
            }

        },
        components: {
            ListHeader
        },
    }
</script>
