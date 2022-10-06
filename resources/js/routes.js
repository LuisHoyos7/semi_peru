import {createRouter, createWebHistory} from "vue-router";
import App from './components/App.vue';


const routes = [
    {
        path: '/home',
        name: 'blogs.index',
        component: App
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})