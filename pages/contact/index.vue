<template>
  <div class="container">
    <h1>contact content</h1>
    <h1>email:hiramatsu3300@gmail.com</h1>
    <h1>Hiramatsu Works: </h1>
    <h1>contact content:http://tourdehdr.sakuraweb.com/h-works-website/</h1>
    <div class="links">
      <nuxt-link to="/">
        HOME
      </nuxt-link>
      <nuxt-link to="/works">
        Work
      </nuxt-link>
      <nuxt-link to="/about">
        About
      </nuxt-link>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </div>
    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/contact'" />
    </transition>
  </div>
</template>

<script>
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
export default {
  layout: 'topPage',
  //   transition: 'content-slide',
  components: {
    TransitionScreen
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  }
//   methods: {
//     link_commit(linkPath) {
//       this.$store.commit('pagePathSet', linkPath)
//       setTimeout(() => {
//           this.$router.push({ path: link_path });
//       }, 500)
//     }
//   }
}
</script>
<style scoped lang="scss">
%center{
    display:flex;
    justify-content: center;
    align-items: center;
}
%left{
    display:flex;
    justify-content: flex-start;
    align-items: center;
}
%right{
    display:flex;
    justify-content: flex-end;
    align-items: center;
}
.container{
  width: 100vw;
  margin-top: $header-height;
  padding: 2rem;
  @media (min-width: 992px){
    padding: 5rem;
  }
  @extend %center;
  flex-direction: column;
}
</style>
