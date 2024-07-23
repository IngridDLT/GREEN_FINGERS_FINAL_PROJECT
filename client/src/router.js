import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Advice from './views/Advice.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/advice', component: Advice }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router