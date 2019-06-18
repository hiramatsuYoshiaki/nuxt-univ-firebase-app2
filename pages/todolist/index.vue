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
      <ConTodolist />
    </transition>
    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/photo'" />
    </transition>
  </div>
</template>

<script>
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
import ConTodolist from '~/components/content/todolist/ConTodolist.vue'
export default {
  layout: 'topPage',
  components: {
    TransitionScreen,
    ConTodolist
  },
  data() {
    return {
      img: require('~/assets/img/img3698z.jpg'),
      pageTitle: 'Todolist Content',
      pageSubTitle: 'Nuxt.js Demo Site',
      pageDiscription: 'todo List',
      pageDiscriptionDetail: 'Vue.jsのフレームワークNuxt.jsを使ったデモサイトです。'

    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        // `hid` は一意の識別子として使用されます。 `vmid` は動作しないので使わないでください。
        { hid: 'description',
          name: 'todolist by Nuxt.js',
          content: 'このページは、h-worksのfirebase Databaseを使ったTodo listを作るページです' }
      ]
    }
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
  width: 100vw;
  min-height: calc(100vh - #{ $header-height } );
  margin-top: $header-height;
  padding: 0 2rem;
  @extend %left;
  flex-direction: column;
   border: 2px solid white;
}
</style>
