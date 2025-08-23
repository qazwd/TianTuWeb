<template>
  <div class="home-page">
    <TitleBar />
    <!-- 页面其他内容 -->
  </div>
</template>

<script>
import TitleBar from '@/components/WebPage/PageComponents/TitleBar.vue'

export default {
  name: 'HomePage',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
