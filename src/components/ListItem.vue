<template>
    <li 
        v-bind:style="{ background: item.color }"
        class="readinglist-item">

        <aside class="toggle-read-write-wrapper">

            <button 
                v-on:click="openModal"
                v-bind:class="{ 'grayed-out': read }"
                class="edit-button">
                <i class="fa fa-pencil"></i>
            </button>

            <button 
                v-on:click="toggleRead"
                class="bookmark-button">
                <i 
                    class="fa"
                    v-bind:class="{
                        'fa-bookmark-o': read, 
                        'fa-bookmark': !read, 
                        'grayed-out': read}">
                </i>
            </button>

        </aside>

        <list-header 
            :read="read" 
            :title="item.title"
            :link="item.link">
        </list-header>

        <aside class="remove-wrapper">
            <button>
                <i
                    v-on:click="addToSavedList"
                    class="fa fa-star">
                </i>
            </button>
            <button>
                <i 
                    v-on:click="removeListItem"
                    class="fa fa-close">
                </i>
            </button>
        </aside>
    </li>
</template>

<style scoped>

    .grayed-out {
        opacity: 0.2;
    }
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

    aside.remove-wrapper,
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
                return this.$store.state.readingLists.working[this.index].read;
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
                    read: !this.read,
                    listName: 'working'
                };

                this.$store.dispatch('toggleRead', data);
            },
            openModal: function() {

                const data = {
                    modalType: 'EditModal', 
                    listType: 'working',
                    listItemIndex: this.index
                };

                this.$store.dispatch('openModal', data);

            },
            removeListItem: function() {
                const data = {
                    listName: 'working',
                    index: this.index
                };
                this.$store.dispatch('removeListItem', data);
            },
            addToSavedList: function() {
                const data = {
                    index: this.index
                };
                this.$store.dispatch('addToSavedList', data); 

            }

        },
        components: {
            ListHeader
        },
    }
</script>
