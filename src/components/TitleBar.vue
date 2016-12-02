<template>

    <header>

        <aside class="settings-wrapper">
            <i class="fa fa-bars"></i>
        </aside>

        <h1>{{ title }}</h1>

        <aside class="add-wrapper">
            <i 
                v-on:click="addListItem"
                class="fa fa-plus"></i>
        </aside>

    </header>

</template>

<style scoped>
    header {

        padding: 10px 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        background: white;
        height: 10vh;

    }

    header h1 {

        width: calc(100% - 120px);

        font-size: 1.3em;
        text-shadow: 3px 3px 0px lightgray;
        text-align: center;

    }

    header > aside {
        width: 120px;
        display: flex;
        align-items: center;
    }

    header > aside.settings-wrapper {
        justify-content: flex-start;
    }

    header > aside.add-wrapper {
        justify-content: flex-end;
    }

    header > aside > i:nth-child(1) {
        padding: 10px;
    }

</style>

<script>
    export default {
        props: ['title'],
        methods: {
            addListItem: function() {
            }
        },
    };
</script>
