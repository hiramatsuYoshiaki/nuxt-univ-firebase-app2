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
        <conPlan />
      </div>
    </transition>
    <transition name="mainCon" appear>
      <div class="content-footer">
        <ContentFooter />
      </div>
    </transition>
    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/plan'" />
    </transition>
  </div>
</template>

<script>
import TransitionScreen from '~/components/transition/TransitionScreen.vue'

import ConPlan from '~/components/content/plan/ConPlan.vue'
// import One from '~/components/content/One.vue'
// import Two from '~/components/content/Two.vue'
// import ContentMain from '~/components/content/ContentMain.vue'
// import HistoryLayout from '~/components/content/HistoryLayout.vue'
import ConHeader from '~/components/content/ConHeader.vue'
import ContentFooter from '~/components/content/ContentFooter.vue'
export default {
  layout: 'topPage',
  components: {
    TransitionScreen,
    ConHeader,
    ConPlan,
    ContentFooter
  },
  data() {
    return {
      img: require('~/assets/img/img3482.jpg'),
      pageTitle: 'Plan Content',
      pageSubTitle: 'Nuxt.js Demo Site',
      pageDiscription: 'Ploject To Do',
      pageDiscriptionDetail: 'Vue.jsのフレームワークNuxt.jsを使ったデモサイトです。'
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description',
          name: 'Plan by Nuxt.js',
          content: 'このページは、Vue.jsフレームワークのNuxt.jsを使って作成したWebサイトのTodoリストの修正ができます。' }
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
  @extend %center;
  flex-direction: column;
}
.content-header{
    width:100vw;
    height: 35vh;
}
.content-main{
  width:100vw;
  background-color: $main-contents-color;
  color: $main-contents-text;
}
.content-footer{
  width: 100vw;
  @extend %center;
  flex-direction: column;

}

</style>
