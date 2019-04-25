<template>
  <div class="topPage">
    <HeaderNav />
    <nuxt />
    <!-- <TransitionScreen v-if="page === 'works'" /> -->
  </div>
</template>
<script>
import HeaderNav from '~/components/header/HeaderNav.vue'
// import TransitionScreen from '~/components/transition/TransitionScreen.vue'
export default {
  layout: 'topPage',
  components: {
    HeaderNav
    // TransitionScreen
  }
}
</script>
<style scoped lang="scss">
</style>
