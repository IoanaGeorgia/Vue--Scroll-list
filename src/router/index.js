import { createRouter, createWebHistory} from 'vue-router'
import CatFeed from '../components/CatFeed.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[

    {
      path: '/',
      component: CatFeed
      //landingPage here
    },
    {
      path: '/cat',
      component: CatFeed
    }
  ]
})
export default router