import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import ProductsView from '../views/ProductsView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView},
  {
    path: '/products',
    name: 'products',
    component: ProductsView},
  {
    path: '/singleprod',
    name: 'singleprod',
    component: SingleProductView},
  {
    path: '/register',
    name: 'register',
    component: RegisterView},
  {
    path: '/login',
    name: 'login',
    component: LoginView},
  {
    path: '/contact',
    name: 'contact',
    component: ContactView}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
