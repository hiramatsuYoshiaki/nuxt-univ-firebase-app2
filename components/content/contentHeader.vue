<template>
  <div class="contentHeader">
    <section class="main-header-wrape">
      <div class="transition-box">
        <transition name="carousel-pop-up" appear>
          <h1>{{ pageTitle }} </h1>
        </transition>
      </div>
      <div class="transition-box">
        <transition name="carousel-pop-up" appear>
          <p>{{ pageSubTitle }}</p>
        </transition>
      </div>
      <div class="transition-box">
        <transition name="carousel-pop-up" appear>
          <p>{{ pageDiscription }}</p>
        </transition>
      </div>
      <div class="transition-box">
        <transition name="carousel-pop-up" appear>
          <p>{{ pageDiscriptionDetail }}</p>
        </transition>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: 'a'
    },
    pageSubTitle: {
      type: String,
      default: 'b'
    },
    pageDiscription: {
      type: String,
      default: 'c'
    },
    pageDiscriptionDetail: {
      type: String,
      default: 'd'
    }
  }
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
.contentHeader{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}
.transition-box{
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.main-header h1,  .main-header p{
  color: $header-text;
}
.main-header h1{
  font-size: 3rem;
  @media (min-width: 992px){
    font-size: 4rem;
  }
}
</style>
