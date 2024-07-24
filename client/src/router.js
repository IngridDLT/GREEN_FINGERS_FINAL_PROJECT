import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import Advice from './views/Advice.vue';
import Admin from './views/Admin.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/advice', component: Advice },
  { path: '/admin', component: Admin }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
