<template>
    <div class="app-container">
        <title-bar title="Reading List"></title-bar>
        <reading-list :readinglist="readinglist"></reading-list>
    </div>
</template>

<style>

    ::-webkit-scrollbar {
        display: none;
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
    section,
    li.readinglist-item {
       width: 100vw; 
    }

    header, 
    section {

    }

</style>

<script>

    import TitleBar from './TitleBar'; 
    import ReadingList from './ReadingList'; 

    export default {
        components: {
            TitleBar,
            ReadingList
        },
        data: function() {
            return {
                readinglist: [
                    {
                        title: 'Python Classes in Depth - Raymond Hettinger',
                        link: 'href://google.com',
                    }
                ]
            };
        }
    };

</script>
