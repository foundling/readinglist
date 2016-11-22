<template>
    <section class="modal">
        <section class="readinglist-edit-modal">
            <textarea 
                value="item.title"
                placeholder="title" 
                rows="1"
                class="modal title-input"></textarea>  
            <textarea 
                value="item.link"
                placeholder="link" 
                rows="8"
                class="modal link-input"></textarea>  
            <button 
                v-on:click="commitEdit"
                class="commit-edit">
                Save
            </button>
        </section>
        <div class="blur-bg"></div>
    </section> 
</template>

<style scoped>
    section.modal {

        height: 100%;
        width: 100%;

        position: absolute;
        top: 0px;
        left: 0px;
        background: rgba(40,40,40,0.5);

        display: flex;
        flex-direction: column;
        align-items: center;
        vertical-align: center;

        z-index: 100;
    }
    div.blur-bg {
        height: 100%;
        width: 100%;

        position: absolute;
        top: 0px;
        left: 0px;

        filter: blur(10px);
        z-index: -1;
    }
    section.readinglist-edit-modal {

        overflow: scroll;
        height: auto;
        padding: 5%;
        width: 80%;
        margin: 0 auto;
        border-radius: 15px;

        text-align: center;
        background: whitesmoke;
    }
    textarea.modal {
        width: 90%;
        border: 0px;
        margin: 0px;
        margin: 0 auto;
        resize: none;
        outline: none;
        border: none;
        white-space: nowrap;
    }

    /* Inputs */
    textarea.modal.title-input,
    textarea.modal.link-input,
    button.commit-edit {
        padding: 2%;
        margin: 2%;
    }

    textarea.modal.link-input,
    textarea.modal.title-input {
        display: block;
        border: 1px solid black;
    }
    textarea.modal.title-input {
    }
    textarea.modal.link-input {
    }
    button.commit-edit {
        display: block;
        width: 90%;
        background: lightgray;
        border: none;
    }
</style>

<script>
    export default {
        methods: {
            commitEdit: () => {
            }
        }
    };
</script>
