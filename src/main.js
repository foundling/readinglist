import Vue from 'vue';
import App from './components/App';
import store from './store';
import VueRouter from 'vue-router';

const app = new Vue({
    el: '#app',
    store: store,
    template: '<App/>',
    components: { App }
});
