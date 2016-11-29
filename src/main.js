import Vue from 'vue';
import App from './components/App';
import store from './store';

console.log(store);


const app = new Vue({
    el: '#app',
    store: store,
    template: '<App/>',
    components: { App }
});
