import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
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
        modals: state => state.ui.modals 
    }

});

export default store;
