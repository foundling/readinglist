import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ui: {
            modalVisible: false
        }
    }, 
    mutations: {
        TOGGLE_MODAL(state) {
            state.ui.modalVisible = !state.ui.modalVisible;
        }
    },
    actions: {
        toggleModal({commit}) {
            commit('TOGGLE_MODAL');
        }
    },
    getters: {
        modalVisible: state => state.ui.modalVisible
    }

});

export default store;
