<template>
  <div class="artificial-intelligence-page">
    <TitleBar />
    <!-- 页面其他内容 -->
  </div>
</template>

<script>
import TitleBar from '@/components/WebPage/PageComponents/TitleBar.vue'

export default {
  name: 'ArtificialIntelligence',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>
.artificial-intelligence-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
