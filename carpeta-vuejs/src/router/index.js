import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ApiDashboard from '../components/ApiDashboard.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/dashboard', name: 'Dashboard', component: ApiDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
