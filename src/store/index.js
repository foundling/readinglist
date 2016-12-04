import Vue from 'vue';
import Vuex from 'vuex';
import ListItem from '../models/ListItem';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        readingLists: {
            currentlyEditing: null,
            activeListName: 'working',
            working: [

                new ListItem({
                    title: 'Python Class talk by Raymond Hettinger',
                    link: 'https://www.youtube.com/watch?v=HTLu2DFOdTg',
                    read: false
                }),                
                new ListItem({
                    title: 'Python Class talk by Raymond Hettinger',
                    link: 'https://www.youtube.com/watch?v=HTLu2DFOdTg',
                    read: false
                }),                

            ],
            saved: [],
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
            state.readingLists.currentlyEditing.title = listItem.title;
            state.readingLists.currentlyEditing.link = listItem.link;
        },
        TOGGLE_READ(state, {index, listName, read}) {
            state.readingLists[listName][index].read = read;
        },
        ADD_LIST_ITEM(state, {listName}) {
            state.readingLists[listName].push(new ListItem);
        },
        REMOVE_LIST_ITEM(state, {listName, index}) {
            state.readingLists[listName].splice(index, 1);
        },
        ADD_TO_SAVED_LIST(state, {index}) {
            const listItem = state.readingLists.working.splice(index,1);
            state.readingLists.saved.push(listItem);
        },
        TOGGLE_ACTIVE_LIST(state) {
            const listName = state.readingLists.activeListName;
            state.readingLists.activeListName = (listName === 'saved' ? 'working' : 'saved');
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
        },
        toggleRead({commit}, payload) {
            commit('TOGGLE_READ', payload);
        },
        addListItem({commit}, payload) {
            commit('ADD_LIST_ITEM', payload);
        },
        removeListItem({commit}, payload) {
            commit('REMOVE_LIST_ITEM', payload);
        },
        addToSavedList({commit}, payload) {
            commit('REMOVE_LIST_ITEM', payload);
        },
        toggleActiveList({commit}) {
            commit('TOGGLE_ACTIVE_LIST');
        }

    },
    getters: {
        activeListName: state => state.readingLists.activeListName,
        savedList: state => state.readingLists.saved,
        workingList: state => state.readingLists.working,
        modals: state => state.ui.modals, 
        currentlyEditing: state => state.readingLists.currentlyEditing,


    }

});

export default store;
