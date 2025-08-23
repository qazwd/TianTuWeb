import { createApp } from 'vue'
import App from './App.vue'

// 导入路由
import router from './components/router/router.js'

// 导入包
import ElementPlus from 'element-plus'  // 导入element-plus组件库
import 'element-plus/dist/index.css'    // 导入element-plus样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'    // 导入element-plus图标

//createApp(App).mount('#app')
const app = createApp(App)


app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)


app.mount('#app')
