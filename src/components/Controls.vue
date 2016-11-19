<template>
    <footer>
        <button class="add-item">
            <i class="fa fa-plus fa-3x"></i>  
        </button>
    </footer>
</template>

<style scoped>

    footer {
        background: whitesmoke;
        width: 100vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    button.add-item {
        user-select: none;
        height: 60px;
        width: 80px;
        background: transparent;
        border: none;
        padding: 0px;
        margin: 0px;
        pointer-events: none;
    }

</style>

<script>

    import ListHeader from './ListHeader';
    import appColors from '../plugins/colors';

    export default {
    }
</script>
