import Home from './views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home2',
    component: Home
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('./views/page2.vue')
  }
]

export default routes
