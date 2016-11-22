<template>

    <div class="app-container">

        <title-bar title="Reading List"></title-bar>
        <reading-list :list="list"></reading-list>

    </div>

</template>

<style>

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

    export default {
        components: {
            TitleBar,
            ReadingList,
        },
        created: function() {
            //console.log(this);
        },
        data: function() {
            return {
                list: [
                    {
                            title: 'Python Classes in Depth - Raymond Hettinger',
                            link: 'href://google.com',
                    },
                ]
            };
        },
        events: {
            'add new list item': function() {
                this.$store.list.push(new ListItem);
            },
        },
    };

</script>
