import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'
import Home from "./Pages/Home.vue";
import Tools from "./Pages/Tools.vue";
import Library from "./Pages/Library.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component:Home},
        {path: '/tools', name: 'Tools', component:Tools},
        {path: '/library', name: 'Library', component:Library}]})
createApp(App).use(router).mount('#app')