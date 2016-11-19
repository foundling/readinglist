<template>
    <a v-bind:href="link">{{title}}</a>
</template>

<style scoped>
</style>

<script>
    export default {
        props: ['title', 'link'],
    }
</script>

