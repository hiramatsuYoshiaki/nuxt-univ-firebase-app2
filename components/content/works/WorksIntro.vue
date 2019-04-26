<template>
  <div class="worksIntro">
    <h1>Nuxt.js Demo</h1>
    <p>Vue.jsのフレームワークNuxt.jsを使ったウェブアプリケーションのデモサイトです</p>
    <div class="flex-container select-mode">
      <div class="two-col">
        <div class="mode-text">
          SSR
        </div>
        <h3>サーバーサイドレンダリング</h3>
        <p>nuxt-univ-app1</p>
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
      <div class="two-col">
        <div class="mode-text">
          SPA
        </div>
        <h3>シングルページアプリケーション</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
//   props: {
//     pageTitle: {
//       type: String,
//       default: 'a'
//     },
//   }
//     data() {
//     return {
//       active: true
//     }
//   },
//   computed: {
//     page() {
//       return this.$store.state.page
//     }
//   },
//   methods: {
//     link_commit(linkPath) {
//       this.active = true
//       this.$store.commit('pagePathSet', linkPath)
//       setTimeout(() => {
//         this.$router.push({ path: linkPath })
//       }, 500)
//     }
//   }
}
</script>
<style scoped lang="scss">
.worksIntro{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 2rem;
  @media (min-width: 768px) {
      padding: 8rem 8rem;
  };
  border: 1px solid  rgba(0,0,0,.2);
}
.flex-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) {
      flex-direction: row;
  };
}
.select-mode{
    margin-top:2rem;
}
.two-col{
    width: 100%;
    @media (min-width: 768px) {
        width: 50%;
    };
    padding-right: 8rem;
    padding-bottom: 2rem;
}
.mode-text{
    font-size: 20rem;
    font-weight: 700;
    color: green;
}
a{
    color: black;
}

</style>
