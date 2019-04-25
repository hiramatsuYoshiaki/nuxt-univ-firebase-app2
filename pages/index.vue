<template>
  <div class="container">
    <div class="content-header">
      <logo />
      <h1 class="title">
        h-works
      </h1>
      <h2 class="subtitle">
        Nuxt.js Universal
      </h2>
    </div>
    <div class="content">
      <section>
        <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1">
          <h3>GitHub</h3>
          <div class="word-wrap">hiramatsuYoshiaki/nuxt-univ-app1</div>
          <div class="word-wrap">master/editer</div>
          <div class="word-wrap">https://github.com/hiramatsuYoshiaki/nuxt-univ-app1</div>
          <div class="word-wrap">GitHub  Page</div>
          <div class="word-wrap">https://hiramatsuyoshiaki.github.io/nuxt-univ-app1/</div>
        </a>
      </section>
      <section>
        <a href="https://app.netlify.com/sites/romantic-kare-6d357c/overview">
          <h3>Netlify</h3>
          <div class="word-wrap">Yoshiaki Hiramatsu team</div>
          <div class="word-wrap">romantic-kare-6d357c</div>
          <div class="word-wrap">https://romantic-kare-6d357c.netlify.com</div>
        </a>
      </section>
    </div>
    <div class="content-footer">
      <nav class="links">
        <nuxt-link to="/">
          HOME
        </nuxt-link>
        <nuxt-link to="/works">
          WORKS
        </nuxt-link>
        <nuxt-link to="/about">
          ABOUT
        </nuxt-link>
        <nuxt-link to="/contact">
          CONTACT
        </nuxt-link>
      </nav>
      <div class="footer-sepalater">
        <div class="line" />
      </div>
      <div>
        © 2019 h-works.
      </div>
    </div>
    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/'" />
    </transition>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
export default {
  layout: 'topPage',
  // transition: 'content-slide',
  components: {
    Logo,
    TransitionScreen
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  }
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
  margin-top: $header-height;
  width: 100vw;
  padding: 2rem;
  @media (min-width: 992px){
    padding: 5rem;
  }
  @extend %center;
  flex-direction: column;
}
//header-----------------------------
.content-header{
  @extend %center;
  flex-direction: column;
}
//content -----------------------
.content{
  margin-top:2rem;
  display:flex;
  flex-direction: column;
  width: 100%;
  @media(min-width: 992px){
    width: 80%;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }
}
section{
  width: 100%;
  margin-top:2rem;
  padding: 2rem;
  @media(min-width: 992px){
    width: 50%;
  }
}
.links{
  @extend %center;
}
.links a{
  display: inline-block;
  margin: 0 2rem;
  cursor: pointer;
}
.word-wrap{
  word-wrap: break-word;
}
// footer-------------------------------
.content-footer{
  width: 100%;
  margin-top:4rem;
  @extend %center;
  flex-direction: column;
}
.content-footer nav{
  margin-top: 2rem;
}
.footer-sepalater{
 width: 100%;
 height: 2rem;
 display: flex;
 justify-content: center;
 align-items: center;
}
.footer-sepalater .line{
  width:80%;
  height: 1px;
  background-color: #fff;
}

</style>
