import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'
import Home from "./Pages/Home.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {oath: '/', name: 'Home', component:Home}]})
createApp(App).use(router).mount('#app')