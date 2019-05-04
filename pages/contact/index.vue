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
      <ConContact v-if="page === '/contact'" />
    </transition>
    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/contact'" />
    </transition>
  </div>
</template>

<script>
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
import ConContact from '~/components/content/contact/ConContact.vue'
export default {
  layout: 'topPage',
  //   transition: 'content-slide',
  components: {
    TransitionScreen,
    ConContact
  },
  data() {
    return {
      img: require('~/assets/img/img3668.jpg'),
      pageTitle: 'Works Content',
      pageSubTitle: 'Nuxt.js Demo Site',
      pageDiscription: 'Overview',
      pageDiscriptionDetail: 'Vue.jsのフレームワークNuxt.jsを使ったデモサイトです。'

    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description',
          name: 'contact by Nuxt.js',
          content: 'このページは、h-worksの紹介と連絡先です。' }
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
  height: calc(100vh - #{ $header-height } );
  margin-top: $header-height;
  padding: 0 2rem;
  @media (min-width: 992px){
    padding: 0 5rem;
  }

  @extend %center;
  flex-direction: column;
}

</style>
