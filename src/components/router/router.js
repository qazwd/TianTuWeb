import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import HomePage from '@/components/HomePage/index.vue'
import RemoteSensingData from '@/components/RemoteSensingData/index.vue'
import ArtificialIntelligence from '@/components/ArtificialIntelligence/index.vue'
import LowAltitudeEconomic from '@/components/LowAltitudeEconomic/index.vue'
import CoreProduct from '@/components/CoreProduct/index.vue'
import AboutUs from '@/components/AboutUs/index.vue'
import NotFound from '@/components/NotFound.vue'


const routes = [
  {
    // 首页
    path: '/Home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/RemoteSensingData',
    name: 'RemoteSensingDataPage',
    component: RemoteSensingData
  },
  {
    path: '/ArtificialIntelligence',
    name: 'ArtificialIntelligencePage',
    component: ArtificialIntelligence
  },
  {
    path: '/LowAltitudeEconomic',
    name: 'LowAltitudeEconomicPage',
    component: LowAltitudeEconomic
  },
  {
    path: '/CoreProduct',
    name: 'CoreProductPage',
    component: CoreProduct
  },
  {
    path: '/AboutUs',
    name: 'AboutUsPage',
    component: AboutUs
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
