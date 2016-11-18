<template>
    <header>
        <aside class="share-wrapper">
            <i class="fa fa-share-alt"></i>
            <i class="fa fa-floppy-o"></i>
        </aside>
            <h1>Reading List</h1>
        <aside class="blank-wrapper"></aside>
    </header>
</template>

</style>
    header {

        display: flex;
        align-items: center;
        justify-content: center;

        background: white;
        height: 10vh;
         
    }

    header h1 {

        font-size: 1.3em;
        text-shadow: 3px 3px 0px lightgray;
        width: calc(100% - 120px);
        text-align: center;

    }

    header > aside {
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header > aside > i:nth-child(1) {
        padding: 10px;
    }

</style>

</script>
    export default {
    };
</script>
