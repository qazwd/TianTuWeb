<template>
  <CoreProduct/>
</template>

<script>
import CoreProduct from './components/CoreProduct/CoreProduct.vue'

export default {
  name: 'App',
  components: {
    CoreProduct
  }
}
</script>

<style>
html, body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>