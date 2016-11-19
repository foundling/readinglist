<template>
    <a class="readinglist-item-link" v-bind:href="link">{{title}}</a>
</template>

<style scoped>
    a.readinglist-item-link {
        width: 60%;
    }
</style>

<script>
    export default {
        props: ['title', 'link'],
    }
</script>

