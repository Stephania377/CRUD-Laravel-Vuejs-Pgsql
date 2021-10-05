
require('./bootstrap');
import Vue from 'vue'; // if this is not work add this =>  window.Vue = require('vue');
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router'; 
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import 'es6-promise/auto';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
import App from './app.vue';
import store from './store';
import { routes } from './routes';
import 'es6-promise/auto';

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App),
});