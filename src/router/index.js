import { createRouter, createWebHistory} from 'vue-router'
import CatFeed from '../components/CatFeed.vue'
import LandingPage from '../components/LandingPage.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[

    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/cat',
      component: CatFeed
    }
  ]
})
export default router