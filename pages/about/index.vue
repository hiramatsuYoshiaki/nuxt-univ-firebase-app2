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
    <div class="content-header">
      <ConHeader
        :page-title="pageTitle"
        :page-sub-title="pageSubTitle"
        :page-discription="pageDiscription"
        :page-discription-detail="pageDiscriptionDetail"
      />
    </div>
    <transition name="mainCon" appear>
      <div class="content-main">
        <ConAbout />
      </div>
    </transition>
    <transition name="mainCon" appear>
      <div class="content-footer">
        <ContentFooter />
      </div>
    </transition>

    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/about'" />
    </transition>
  </div>
</template>
<script>
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
import ConAbout from '~/components/content/about/ConAbout.vue'

import ConHeader from '~/components/content/ConHeader.vue'
import ContentFooter from '~/components/content/ContentFooter.vue'

export default {
  layout: 'topPage',
  //   transition: 'content-slide',
  components: {
    TransitionScreen,
    ConAbout,
    ConHeader,
    ContentFooter
  },
  data() {
    return {
      img: require('~/assets/img/img2722.jpg'),
      pageTitle: 'About Content',
      pageSubTitle: 'Demo Site Usage',
      pageDiscription: 'about setting',
      pageDiscriptionDetail: 'デモサイトの簡単なセットアップ方法について'
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description',
          name: 'about by Nuxt.js',
          content: 'このページは、Nuxt.jsアプリケーションのインストールと使い方と設定を紹介しています。' }
      ]
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  }
  // methods: {
  //   link_commit(linkPath) {
  //     this.$store.commit('pagePathSet', linkPath)
  //     setTimeout(() => {
  //       this.$router.push({ path: link_path })
  //     }, 500)
  //   }
  // }
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
  position: relative;
  width: 100vw;
  height: 100%;
  margin-top: $header-height;
  @extend %center;
  flex-direction: column;
}
.content-header{
    width:100vw;
    height: 35vh;
    // padding: 1rem 1rem;
    // border: 1px solid yellow;
}
.content-main{
  // height: 75vh;
  width:100vw;
  background-color: $main-contents-color;
  color: $main-contents-text;
  // padding-bottom:20rem;
  // padding-left: 2rem;
  // border: 1px solid orangered;
}
.content-footer{
  width: 100vw;
  @extend %center;
  flex-direction: column;
  // border: 1px solid red;

}
</style>
