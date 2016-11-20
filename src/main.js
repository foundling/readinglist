import Vue from 'vue';
import App from './components/App';
import Store from './store';

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});

console.log(app);
//app.store = new Store(app);
