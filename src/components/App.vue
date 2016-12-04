<template>

    <div class="app-container">

        <title-bar title="Reading List"></title-bar>

        <reading-list 
            v-show="activeListName === 'working'"
            list-name="working">
        </reading-list>

        <reading-list 
            v-show="activeListName === 'saved'"
            list-name="saved">
        </reading-list>

        <edit-modal></edit-modal>
        <confirm-modal></confirm-modal>

    </div>

</template>

<style>

    html {
        -webkit-tap-highlight-color: transparent;
    }

    ul, li {
        list-style-type: none;
        margin: 0; 
        padding: 0;

    }

    a:link,
    a:visited,
    a:hover,
    a:active {
        text-decoration: none;
        color: rgb(40,40,40);
    }
    ::-webkit-scrollbar {
        display: none;
        height: 0px;
        width: 0px;
    }

    i.fa {
        color: rgb(40,40,40);
    }
    html, body {

        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;

        font-family: sans-serif; 

    }

    html, body, body * {

        box-sizing: border-box;

    }


    header,
    footer,
    section {
       width: 100vw; 
    }

    header {
        top: 0px;
        left: 0px;
    }

    section {
        top: 10vh;
        left: 0px;
    }

    footer {
        bottom: 0px;
        left: 0px;
    }

</style>

<script>

    import TitleBar from './TitleBar'; 
    import ReadingList from './ReadingList'; 
    import ListItem from '../models/ListItem';
    import { EditModal, ConfirmModal} from './Modals';

    export default {
        components: {

            TitleBar,
            ReadingList,
            EditModal,
            ConfirmModal

        },
        computed:  {
            activeListName() {
                return this.$store.getters.activeListName;
            }
        },
        methods: {
        },
        data: function() { return {}; }
    };

</script>
