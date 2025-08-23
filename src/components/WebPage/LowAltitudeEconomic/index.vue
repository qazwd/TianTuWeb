<template>
  <div class="low-altitude-economic-page">
    <TitleBar />
    <!-- 页面其他内容 -->
  </div>
</template>

<script>
import TitleBar from '@/components/WebPage/PageComponents/TitleBar.vue'

export default {
  name: 'LowAltitudeEconomic',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>
.low-altitude-economic-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
