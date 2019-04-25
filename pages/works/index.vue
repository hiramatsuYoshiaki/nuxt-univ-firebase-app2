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
      <!-- <h1>{{ pageTitle }}</h1>
      <h3>works content-header</h3> -->
      <ContentHeader
        :page-title="pageTitle"
        :page-sub-title="pageSubTitle"
        :page-discription="pageDiscription"
        :page-discription-detail="pageDiscriptionDetail"
      />
    </div>

    <transition name="mainCon" appear>
      <div class="content-main">
        <h1>works content</h1>
        page:{{ page }}
      </div>
    </transition>

    <div class="content-footer">
      <nav class="links">
        <a class="menu_link" @click="link_commit('/works')">
          WORKS
        </a>
        <a class="menu_link" @click="link_commit('/about')">
          ABOUT
        </a>
        <a class="menu_link" @click="link_commit('/contact')">
          CONTACT
        </a>
      </nav>
      <div class="footer-sepalater">
        <div class="line" />
      </div>
      <div>
        © 2019 h-works.
      </div>
    </div>

    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/works'" />
    </transition>
  </div>
</template>

<script>
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
import ContentHeader from '~/components/content/ContentHeader.vue'
export default {
  layout: 'topPage',
  //   transition: 'content-slide'
  components: {
    TransitionScreen,
    ContentHeader
  },
  data() {
    return {
      img: require('~/assets/img/fuji1.jpg'),
      pageTitle: 'Works Content',
      pageSubTitle: 'Seamless Page Transition Demo',
      pageDiscription: 'overview',
      pageDiscriptionDetail: 'overviewoverviewoverviewoverview'
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description',
          name: 'Works by Nuxt.js',
          content: 'このページは、Vue.jsフレームワークのNuxt.jsを使って作成したWebサイトを紹介しています。' }
      ]
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  },
  methods: {
    link_commit(linkPath) {
      this.$store.commit('pagePathSet', linkPath)
      setTimeout(() => {
        this.$router.push({ path: linkPath })
      }, 500)
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
  position: relative;
  width: 100vw;
  height: 100%;
  margin-top: $header-height;
  padding: 2rem;
  @media (min-width: 992px){
    padding: 5rem;
  }
  @extend %center;
  flex-direction: column;
}
.content-header{
    width:100vw;
    height: 35vh;
    padding: 1rem 1rem;
}

.content-main{
  height: 75vh;
  width:100vw;
//   height:100%;
  background-color: $main-contents-color;
  color: $main-contents-text;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  padding-bottom:20rem;
  padding-left: 2rem;

}
.content-footer{
  width: 100vw;
  margin-top:4rem;
  @extend %center;
  flex-direction: column;
}
section{
  margin-top:2rem;
}
.links{
  @extend %center;
}
.links a{
  display: inline-block;
  margin: 0 2rem;
  cursor: pointer;
}
// footer-------------------------------

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
//bg --------------------------------------
.bgImageFull{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  width: 100vw;
}
.bgImage{
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  transform-origin:  center ;
}
.bg_filter{
      background-color: rgba(0,0,0,.6);
      position: fixed;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      min-width: 100vw;
  }
</style>
