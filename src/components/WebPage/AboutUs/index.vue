<template>
  <div class="about-us">
    <TitleBar />
    <!-- 页面其他内容 -->
  </div>
</template>

<script>
import TitleBar from '@/components/WebPage/PageComponents/TitleBar.vue'

export default {
  name: 'AboutUs',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>
.about-us {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
