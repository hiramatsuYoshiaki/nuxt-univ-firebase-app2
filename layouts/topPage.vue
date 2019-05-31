<template>
  <div class="topPage">
    <HeaderNav />
    <nuxt />
  </div>
</template>
<script>
import HeaderNav from '~/components/header/HeaderNav.vue'
export default {
  layout: 'topPage',
  components: {
    HeaderNav
  }
}
</script>
<style scoped lang="scss">
.topPage{
  margin:0;
  padding:0;
  width: auto;
  min-width: 100vw;
}
</style>
