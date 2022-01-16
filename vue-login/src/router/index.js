import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import RegisterKingdom from '../views/RegisterKingdom.vue'
import Dashboard from '../views/Dashboard.vue'

/* 
    guest: true --- only users who are not authenticated will see it
    requiresAuth: true --- only authenticated user can access this endpoing
*/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      guest: true
    }
  },
  {
    path: '/registerkingdom',
    name: 'RegisterKingdom',
    component: RegisterKingdom,
    meta: {
      guest: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* 
   --- beforeEach is called befor each route is processed: used to define checking conditions and restrict user access
   - if requiresAuth, check for a token showing the user is logged in
   - if guest, check if the user is logged in
*/

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem('token') == null) {
//       next({
//         path: '/login',
//         params: { nextUrl: to.fullPath }
//       })
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (localStorage.getItem('token') == null) {
//       next()
//     } else {
//       // !! redirect uses the name of the route, not path
//       next({ name: 'dashboard' })
//     }
//   } else {
//     next()
//   }
// })

export default router
