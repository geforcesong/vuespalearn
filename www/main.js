import Vue from 'vue';
import VueRouter from 'vue-router';
class App{
    constructor(){
         Vue.use(VueRouter);
    }

    run(){
        console.log("hello vue");
    }
}

export default App;