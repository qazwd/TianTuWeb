import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import HomePage from '@/components/WebPage/HomePage/index.vue'
import RemoteSensingData from '@/components/WebPage/RemoteSensingData/index.vue'
import ArtificialIntelligence from '@/components/WebPage/ArtificialIntelligence/index.vue'
import LowAltitudeEconomic from '@/components/WebPage/LowAltitudeEconomic/index.vue'
import CoreProduct from '@/components/WebPage/CoreProduct/index.vue'
import AboutUs from '@/components/WebPage/AboutUs/index.vue'
import NotFound from '@/components/404.vue'


const routes = [
  {
    // 添加默认路由重定向到首页
    path: '/',
    redirect: '/homePage'
  },
  {
    // 首页
    path: '/homePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    // 遥感数据服务
    path: '/remoteSensingData',
    name: 'RemoteSensingDataPage',
    component: RemoteSensingData
  },
  {
    // 人工智能服务
    path: '/artificialIntelligence',
    name: 'ArtificialIntelligencePage',
    component: ArtificialIntelligence
  },
  {
    // 低空经济服务
    path: '/lowAltitudeEconomic',
    name: 'LowAltitudeEconomicPage',
    component: LowAltitudeEconomic
  },
  {
    // 核心产品
    path: '/coreProduct',
    name: 'CoreProductPage',
    component: CoreProduct
  },
  {
    // 关于我们
    path: '/aboutUs',
    name: 'AboutUsPage',
    component: AboutUs
  },
  {
    // 404页面
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 添加滚动行为配置
  scrollBehavior(to, from, savedPosition) {
    // 每次路由切换时滚动到顶部
    // return { top: 0 }
    // 如果需要支持浏览器前进/后退保留滚动位置，可以使用：
    return savedPosition || { top: 0 }
  }
})

export default router
