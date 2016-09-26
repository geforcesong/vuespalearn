import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './pages/routes';
class App {
    constructor() {
        Vue.use(VueRouter);
    }

    run() {
        var App = {};
        var router = new VueRouter();
        router.map(Routes);
        router.start(App, 'body')
    }
}

export default App;