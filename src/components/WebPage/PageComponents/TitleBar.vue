<template>
  <div class="title-bar">
    <div class="title-bar-left">
      <router-link :class="{ 'home-logo-highlight': $route.path === '/homePage' }" to="/homePage">
        <!-- 为首页图片添加高亮类名 -->
        <img 
          src="@/assets/logo.png" 
          alt="天图遥感" 
        />
      </router-link>
    </div>
    <div class="title-bar-right">
      <template v-for="(item, index) in menuItems" :key="index">
        <div :class="`title-bar-right-item${index + 1}`">
          <!-- 根据当前路由动态添加 active 类 -->
          <div :class="{ active: $route.path === item.path }">
            <router-link 
              :to="item.path" 
              class="title-text"
            >
              {{ item.text }}
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    menuItems: {
      type: Array,
      default: () => [
        { path: '/remoteSensingData', text: '遥感数据服务' },
        { path: '/artificialIntelligence', text: '人工智能服务' },
        { path: '/lowAltitudeEconomic', text: '低空经济服务' },
        { path: '/coreProduct', text: '核心产品' },
        { path: '/aboutUs', text: '关于我们' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// 将 #ID 样式改为 .active 类
.active {
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  background: radial-gradient(ellipse at center, #B3EAFF 0%, #1B1C63 60%);

  .title-text {
    min-width: 6em;
  }
}

// 添加首页图片高亮样式
.home-logo-highlight {
  // 这里可以根据需求添加具体的高亮样式，例如添加阴影、改变透明度等
  background: radial-gradient(circle at center, #B3EAFF 0%, #1B1C63 60%);
}

.title-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #1B1C63;

    .title-bar-left {
      width: 20%;
      display: flex;

      img  {
        width: 50%;
      }
    }

    .title-bar-right {
      width: 80%;
      display: flex;
      justify-content: space-evenly;

      .title-bar-right-item1, .title-bar-right-item2, .title-bar-right-item3, 
      .title-bar-right-item4, .title-bar-right-item5 {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: white;
          text-decoration: none;
          outline: none;
          transition: all 0.2s ease-in-out;
          font-size: 1.2rem;

          &:hover {
            color: #B3EAFF;
          }

          &:focus {
            color: #00b7ff;
          }

          &:active {
            color: #ffffff;
            background-color: #1B1C63;
          }
        }
      }
    }
}
</style>
