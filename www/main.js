import Vue from 'vue';
import VueRouter from 'vue-router';
class App {
    constructor() {
        Vue.use(VueRouter);
    }

    run() {
        var Foo = {
            template: '<p>This is foo!</p>'
        }

        var Bar = {
            template: '<p>This is bar!</p>'
        }

        var App = {};
        var router = new VueRouter();
        router.map({
            '/foo': {
                component: Foo
            },
            '/bar': {
                component: Bar
            }
        });
        router.start(App, '#app')
    }
}

export default App;