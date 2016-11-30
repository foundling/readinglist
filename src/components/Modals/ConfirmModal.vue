<template>
    <section 
        v-bind:class="{invisible: !visible}"
        class="modal">

        <section 
            v-on:click="cancelEdit"
            class="readinglist-edit-modal">

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
                class="commit-edit">Save</button>

            <button 
                v-on:click="cancelEdit"
                class="commit-edit">Cancel</button>

        </section>

        <div class="blur-bg"></div>

    </section> 
</template>

<style scoped>
    .invisible {
        visibility: hidden;
    }
    section.modal {

        height: 100vh;
        width: 100vw;

        position: fixed;
        top: 0;
        left: 0;
        background: rgba(40,40,40,0.5);

        flex-direction: column;
        align-items: center;
        justify-content: center;

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
        height: 75%;
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
        computed: {
            visible () {
                return this.$store.getters.modals.ConfirmModal.visible;
            }
        },
        methods: {
            commitEdit() {
                this.$store.dispatch('toggleModal', 'ConfirmModal')
            },
            cancelEdit() {
                this.$store.dispatch('toggleModal', 'ConfirmModal')
            }
        }
    };
</script>
