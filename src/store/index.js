import Vue from 'vue';
import Vuex from 'vuex';
import ListItem from '../models/ListItem';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        readingLists: {
            currentlyEditing: null,
            saved: [

                new ListItem({
                    title: 'Python Class talk by Raymond Hettinger',
                    link: 'https://www.youtube.com/watch?v=HTLu2DFOdTg'
                })                

            ],
            working: [
                new ListItem({
                    title: 'Concurrency Model and Event Loop',
                    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop'
                })                
            ],
        },
        ui: {
            modals: {
                EditModal: {
                    visible: false
                },
                ConfirmModal: {
                    visible: false
                }
            }
        }
    }, 
    mutations: {
        OPEN_MODAL (state, { modalType, listType, listItemIndex }) {
            state.ui.modals[modalType].visible = true;
            state.readingLists.currentlyEditing = state.readingLists[listType][listItemIndex];
        },
        CLOSE_MODAL (state, { modalType }){
            state.ui.modals[modalType].visible = false;
        },
        COMMIT_EDITED_LIST_ITEM(state, listItem) {
            console.log(listItem);
            state.readingLists.currentlyEditing.title = listItem.title;
            state.readingLists.currentlyEditing.link = listItem.link;
        }

    },
    actions: {
        openModal({commit}, payload) {
            commit('OPEN_MODAL', payload);
        },
        closeModal({commit}, payload) {
            commit('CLOSE_MODAL', payload);
        },
        commitEditedListItem({commit}, payload){
            commit('COMMIT_EDITED_LIST_ITEM', payload);
        }
    },
    getters: {
        modals: state => state.ui.modals, 
        savedList: state => state.readingLists.saved,
        workingList: state => state.readingLists.working,
        currentlyEditing: state => state.readingLists.currentlyEditing
    }

});

export default store;
