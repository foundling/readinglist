<template>
    <a 
        class="readinglist-item-link" 
        v-bind:class="{read: read}"
        v-bind:href="link">{{ title }}
    </a>
</template>

<style scoped>
    a.readinglist-item-link {
        width: 60%;
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

