import Vue from 'vue';
import App from './components/App';

import Vuex from 'vuex';
Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    store: new Vuex.Store(),
    template: '<App/>',
    components: { App }
});
