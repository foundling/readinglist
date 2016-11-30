<template>

    <div class="app-container">

        <title-bar title="Reading List"></title-bar>
        <reading-list :list="list"></reading-list>
        <edit-modal></edit-modal>
        <confirm-modal></confirm-modal>

    </div>

</template>

<style>

    a:link,
    a:visited,
    a:hover,
    a:active {
        text-decoration: none;
        color: black;
    }
    ::-webkit-scrollbar {
        display: none;
        height: 0px;
        width: 0px;
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
        data: function() { return {}; }
    };

</script>
