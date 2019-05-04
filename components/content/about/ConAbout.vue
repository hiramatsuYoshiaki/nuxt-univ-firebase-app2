<template>
  <div class="aboutIntro">
    <div class="flex-container">
      <div class="side-col">
        <p>GitHub</p>
        <p>netlify</p>
        <p>Nuxt Setting</p>
        <p>Nuxt.config.js</p>
      </div>
      <div class="main-col">
        <!-- <div v-html="$md.render(model)" /> -->
        <div v-html="$md.render(model2)" />
        <div v-html="readMe" />
      </div>
    </div>
  </div>
</template>
<script>
import readMe from '~/assets/readMe/readMe.md'
// import TransitionScreen from '~/components/transition/TransitionScreen.vue'

//       img: require('~/assets/img/img3668.jpg'),
export default {
//   props: {
//     pageTitle: {
//       type: String,
//       default: 'a'
//     },
//   }
  data() {
    return {
      model: `# Hello World!`,
      model2: `# nuxt.js!`
    }
  },
  computed: {
    // page() {
    //   return this.$store.state.page
    // }

    readMe() {
      return readMe
    }

  }
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
.aboutIntro{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 2rem;
//   @media (min-width: 992px) {
//       padding: 8rem 8rem;
//   };
  border: 1px solid  rgba(0,0,0,.2);
}
.flex-container{
  width: 100%;
  display: flex;
//   flex-direction: column;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
//   @media (min-width: 768px) {
//       flex-direction: row;
//   };
}
.side-col{
    width: 100%;
    display: none;
    @media (min-width: 992px) {
        width: 30%;
        display: block;
    };
    // padding-right: 8rem;
    // padding-bottom: 2rem;
    padding: 2rem;
    section{
      margin-bottom: 2rem;
    }
    h3{
      color:#000000;
      font-weight: 600;
    }
    p{
      color:rgb(70, 69, 69);
    }
    border: 1px solid  rgba(0,0,0,.2);

}
.main-col{
    width: 100%;
    @media (min-width: 992px) {
        width: 70%;
    };
    padding: 2rem;
    // padding-right: 8rem;
    // padding-bottom: 2rem;
    section{
      margin-bottom: 2rem;
    }
    h3{
      color:#000000;
      font-weight: 600;
    }
    p{
      color:rgb(70, 69, 69);
    }
    border: 1px solid  rgba(0,0,0,.2);

}

</style>
