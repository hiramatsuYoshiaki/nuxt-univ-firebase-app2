<template>
  <div class="container">
    <div class="bgImageFull">
      <transition name="bgTran" appear>
        <div
          class="bgImage"
          :style="{ 'background-image': 'url(' + img + ') ' }"
        >
          <div class="bg_filter" />
        </div>
      </transition>
    </div>
    <transition name="mainCon" appear>
      <ConPhoto />
    </transition>
    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/photo'" />
    </transition>
  </div>
</template>

<script>
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
import ConPhoto from '~/components/content/photo/ConPhoto.vue'
export default {
  layout: 'topPage',
  //   transition: 'content-slide',
  components: {
    TransitionScreen,
    ConPhoto
  },
  data() {
    return {
      img: require('~/assets/img/img3698z.jpg'),
      pageTitle: 'photo Content',
      pageSubTitle: 'Nuxt.js Demo Site',
      pageDiscription: 'photo List',
      pageDiscriptionDetail: 'Vue.jsのフレームワークNuxt.jsを使ったデモサイトです。'

    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description',
          name: 'photo by Nuxt.js',
          content: 'このページは、h-worksのfirebase strageを使ったphoto listを作るページです' }
      ]
    }
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
//         this.$router.push({ path: link_path })
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
  min-height: calc(100vh - #{ $header-height } );
  margin-top: $header-height;
  padding: 0 2rem;
  // @media (min-width: 992px){
  //   padding: 0 5rem;
  // }
  @extend %left;
  flex-direction: column;
   border: 2px solid white;
}

</style>
