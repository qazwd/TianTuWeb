<template>
  <router-view v-slot="{ Component }">
    <transition name="page-transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  /* overflow-x: hidden; 防止页面横向滚动 */
  overflow-y: auto; /* 允许纵向滚动 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* 路由过渡动画样式 */
.page-transition-enter-from, 
.page-transition-leave-to {
  opacity: 0;
}

.page-transition-enter-active, 
.page-transition-leave-active {
  transition: opacity 0.3s ease-out; /* 仅过渡透明度，时间0.5s，缓动效果更自然 */
  will-change: opacity;
}

.page-transition-enter-to, 
.page-transition-leave-from {
  opacity: 1; /* 完全不透明 */
}

</style>