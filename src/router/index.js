import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
// import store from '../store/index'
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue'),
      },
      {
        path: 'messages',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Messages.vue'),
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
      },
      {
        path: 'settings',
        component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: require(/* webpackChunkName: "Settings" */ '../components/Login.vue').default,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  saveScrollPosition: true,
  routes
})

export default router
