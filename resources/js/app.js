require('./bootstrap');
// import vue from 'vue'

// window.Vue = vue;

import App from './components/App.vue';
import VueAxios from 'vue-axios';
import Axios from 'axios';

import VueRouter from 'vue-router';
import routes from './routes.js';

import Vue, { useAttrs } from 'vue'
import { createApp } from 'vue'
// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
import '../src/assets/scss/app.scss';


const app = createApp({
    components : {
        App
    }, 
    }).use(routes);

    app.mount('#app')

// app.mount('#app')