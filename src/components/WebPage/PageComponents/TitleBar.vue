<template>
  <div class="title-bar">
    <div class="title-bar-left">
      <router-link :class="{ 'home-logo-highlight': $route.path === '/homePage' }" to="/homePage">
        <!-- 为首页图片添加高亮类名 -->
        <img 
          :src="$route.path === '/homePage' ? require('@/assets/images/logo-highlight.png') : require('@/assets/images/logo.png')"
          alt="天图遥感" 
        />
      </router-link>
    </div>
    <div class="title-bar-right">
      <template v-for="(item, index) in menuItems" :key="index">
        <div :class="`title-bar-right-item${index + 1}`">
          <div class="dropdown">
            <!-- 根据当前路由动态添加 active 类 -->
            <div :class="{ active: $route.path === item.path }">
              <router-link 
                :to="item.path" 
                class="title-text"
              >
                {{ item.text }}
              </router-link>
            </div>
            <!-- 添加下拉菜单内容 -->
            <!-- <div v-if="item.children && item.children.length" class="dropdown-content">
              <router-link 
                v-for="(child, childIndex) in item.children" 
                :key="childIndex"
                :to="child.path"
                class="dropdown-item"
              >
                {{ child.text }}
              </router-link>
            </div> -->
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
        {
          path: '/remoteSensingData', 
          text: '遥感数据服务',
          children: [
            { path: '/remoteSensingData/data1', text: '数据类型1' },
            { path: '/remoteSensingData/data2', text: '数据类型2' }
          ]
        },
        {
          path: '/artificialIntelligence', 
          text: '人工智能服务',
          children: [
            { path: '/artificialIntelligence/service1', text: '服务1' },
            { path: '/artificialIntelligence/service2', text: '服务2' }
          ]
        },
        {
          path: '/lowAltitudeEconomic', 
          text: '低空经济服务',
          children: [
            { path: '/lowAltitudeEconomic/economic1', text: '经济模式1' },
            { path: '/lowAltitudeEconomic/economic2', text: '经济模式2' }
          ]
        },
        {
          path: '/coreProduct', 
          text: '核心产品',
          children: [
            { path: '/coreProduct/product1', text: '产品1' },
            { path: '/coreProduct/product2', text: '产品2' }
          ]
        },
        { path: '/aboutUs', text: '关于我们' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

// 添加首页图片高亮样式
.home-logo-highlight {
  // 这里可以根据需求添加具体的高亮样式，例如添加阴影、改变透明度等
  // background: radial-gradient(ellipse at center, #B3EAFF 0%, #000144 10%);
  height: 80%;
}

.title-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #020329;

    .title-bar-left {
      width: 20%;
      display: flex;

      img  {
        width: 40%;
      }
    }

    .title-bar-right {
      width: 80%;
      display: flex;
      justify-content: space-evenly;

      .dropdown {
        position: relative;
        display: inline-block;
        // box-sizing: border-box;
        padding: 0;
        margin: 0;

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
          // box-sizing: border-box;

          .dropdown-item {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            // box-sizing: border-box;

            &:hover {
              background-color: #f1f1f1;
            }
          }
        }

        &:hover .dropdown-content {
          display: block;
        }

        // 标题栏选项激活样式 .active 类
        .active {
          // width: 100%;
          display: flex;
          align-items: center;
          // box-sizing: border-box;
          padding: 0;
          margin: 0;
          // background: radial-gradient(ellipse at center, #B3EAFF 0%, #1B1C63 60%);

          .title-text {
            // min-width: 7em;
            // width: fit-content;
            color: #006aff !important; // 确保标题文字颜色生效
            // box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        }
      }

      .title-bar-right-item1, .title-bar-right-item2, .title-bar-right-item3, 
      .title-bar-right-item4, .title-bar-right-item5 {
        display: flex;
        justify-content: center;
        align-items: center;
        // box-sizing: border-box;
        padding: 0;
        margin: 0;

        a {
          color: white;
          text-decoration: none;
          outline: none;
          // transition: color 0.2s ease-in-out;
          font-size: 1.2rem;
          // box-sizing: border-box;
          padding: 0;
          margin: 0;
          // min-width: 7em;
          // width: fit-content;

          &:hover {
            color: #B3EAFF;
          }

          &:focus {
            color: #00b7ff;
          }

          &:active {
            color: #ffffff;
            background-color: #000144;
          }
        }
      }
    }
}
</style>
