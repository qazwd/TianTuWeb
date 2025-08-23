<template>
  <transition name="page-transition">
    <RouterView/>
  </transition>
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
  transform: translateY(10px); /* 轻微下移增强过渡感 */
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.3s ease-out; /* 过渡时间0.3s，缓动效果更自然 */
}

.page-transition-enter-to,
.page-transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
