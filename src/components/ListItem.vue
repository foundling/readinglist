<template>
    <li class="readinglist-item">

        <aside class="toggle-read-wrapper">
            <i class="fa fa-bookmark-o"></i>
            <!--
            <i class="fa fa-bookmark"></i>
            -->
        </aside>

        <a class="readinglist-item-link">Python Classes in Depth - Raymond Hettinger</a>

        <aside class="remove-wrapper">
            <i class="fa fa-close"></i>
        </aside>

    </li>
</template>

<style scoped>
    li.readinglist-item {

        height: 10vh;
        overflow-x: scroll;

        display: flex;
        align-items: center;
        justify-content: center;

        white-space: nowrap;

    }

    a.readinglist-item-link {
        width: 60%;
    }

    aside.toggle-read-wrapper {
        margin-right: auto;
    }

    aside.remove-wrapper {
        margin-left: auto;
    }

    aside.toggle-read-wrapper,
    aside.remove-wrapper {
        width: 20%;    
    }

    a.readinglist-item-link {
        overflow-x: scroll;
    }
</style>

<script>
    export default {
      data () {
        return {
        }
      }
    }
</script>

