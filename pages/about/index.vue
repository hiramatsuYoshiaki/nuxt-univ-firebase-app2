<template>
  <div class="container">
    <h1>about content</h1>
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
    <div>
      <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1">
        <div>GitHub</div>
        <div>hiramatsuYoshiaki/nuxt-univ-app1</div>
        <div>master/editer</div>
        <div>https://github.com/hiramatsuYoshiaki/nuxt-univ-app1</div>
        <div>GitHub  Page</div>
        <div>https://hiramatsuyoshiaki.github.io/nuxt-univ-app1/</div>
      </a>
    </div>
    <div>
      <a href="https://app.netlify.com/sites/romantic-kare-6d357c/overview">
        <div>Netlify</div>
        <div>Yoshiaki Hiramatsu team</div>
        <div>romantic-kare-6d357c</div>
        <div>https://romantic-kare-6d357c.netlify.com</div>
      </a>
    </div>
    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/about'" />
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
