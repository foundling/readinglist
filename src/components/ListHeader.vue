<template>
    <a 
        target="_blank"
        class="readinglist-item-link" 
        v-bind:class="{read: read}"
        v-bind:href="link">{{ title }}
    </a>
</template>

<style scoped>
    a {
        font-weight: 100;
    }
    a.readinglist-item-link {
        width: 58%;
        margin: 0 auto;
        overflow-x: scroll;
    }
    a.read {
        opacity: 0.2;
    }
</style>

<script>
    export default {
        props: ['title', 'link', 'read'],
    }
</script>

