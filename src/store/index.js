import Vuex from 'vuex';


export default function (app) {
    console.log(app);
    app.use(Vuex);
    return new Vuex.Store();
}
