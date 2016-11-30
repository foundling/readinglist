<template>
    <section 
        v-on:click.self="cancelEdit"
        v-bind:class="{invisible: !visible}"
        class="modal">

        <section 
            class="readinglist-edit-modal">

            <textarea 
                v-model="listItem.title"
                placeholder="Title" 
                rows="1"
                class="modal title-input"></textarea>  

            <textarea 
                v-bind:value="listItem.link"
                placeholder="Link" 
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
        data: function() {
            return {
                name: 'EditModal',
            };
        },
        computed: {
            visible () {
                return this.$store.getters.modals.EditModal.visible;
            },
            listItem () {
                return this.$store.getters.currentlyEditing || {title: '', link: ''}; 
            }

        },
        methods: {
            commitEdit() {

                const payload = {
                    modalType: this.name
                }; 

                const updatedListItem = {
                    title: this.$el.querySelector('.title-input').value,
                    link: this.$el.querySelector('.link-input').value
                };
                this.$store.dispatch('commitEditedListItem', updatedListItem)
                this.$store.dispatch('closeModal', payload)
            },
            cancelEdit() {

                const payload = {
                    modalType: this.name 
                };

                this.$store.dispatch('closeModal', payload)
            }
        }
    };
</script>
