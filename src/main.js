import { createApp } from 'vue'
import App from './App.vue'

// 导入路由
import router from './components/router/router.js'

// 导入包
import ElementPlus from 'element-plus'  // 导入element-plus组件库
import 'element-plus/dist/index.css'    // 导入element-plus样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'    // 导入element-plus图标
import './assets/styles/global.css' // 导入全局滚动条样式

//createApp(App).mount('#app')
const app = createApp(App)


app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)


app.mount('#app')

// 监听系统主题变化
if (window.matchMedia) {
  const prefers = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleThemeChange = (e) => {
    if (e.matches) {
      console.log('系统切换到暗色主题');
    } else {
      console.log('系统切换到亮色主题');
    }
  };
  
  prefers.addEventListener('change', handleThemeChange);
  handleThemeChange(prefers);
}