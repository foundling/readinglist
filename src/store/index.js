import Vue from 'vue';
import Vuex from 'vuex';
import ListItem from '../models/ListItem';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        readingLists: {
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
        TOGGLE_MODAL(state, name) {
            state.ui.modals[name].visible = !state.ui.modals[name].visible;
        }
    },
    actions: {
        toggleModal({commit}, name) {
            commit('TOGGLE_MODAL', name);
        }
    },
    getters: {
        modals: state => state.ui.modals, 
        savedList: state => state.readingLists.saved,
        workingList: state => state.readingLists.working,
    }

});

export default store;
