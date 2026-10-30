<template>
  <div class="remote-sensing-data-page">
    <TitleBar />
    <!-- 页面其他内容 -->
  </div>
</template>

<script>
import TitleBar from '@/components/WebPage/PageComponents/TitleBar.vue'

export default {
  name: 'RemoteSensingData',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>
.remote-sensing-data-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
