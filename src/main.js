import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import ClassSchedule from "./views/ClassSchedule.vue";
import Blog from "./views/Blog.vue";
import Contact from "./views/Contact.vue";
import JoiningUp from "./views/JoiningUp.vue";
import GuildfordWeightLifting from "./views/WeightLifting.vue";
import CrossFit from "./views/CrossFit.vue";

import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/crossfit', component: CrossFit},
        {path: '/about', component: About},
        {path: '/schedule', component: ClassSchedule},
        {path: '/blog', component:Blog},
        {path: '/contact', component:Contact},
        {path: '/join', component:JoiningUp},
        {path: '/weightlifting', component:GuildfordWeightLifting}
    ],
    scrollBehavior(to, from, savedPosition){
        return {top:0};
    }
})
createApp(App)
    .use(router)
    .mount('#app')
