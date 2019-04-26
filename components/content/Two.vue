<template>
  <div class="two">
    <h1>Two Column Content</h1>
    <p>このコンポーネントは、2コラムのレイアウトでできています。</p>
    <div class="flex-container">
      <div class="two-col">
        <ul>
          <li>min-width:0 -- padding: 2rem 2rem;</li>
          <li>min-width:576 -- padding: 2rem 2rem;</li>
          <li>min-width:768 -- padding: 8rem 8rem;</li>
          <li>min-width:992 -- padding: 8rem 8rem;</li>
          <li>min-width:1200 -- padding: 8rem 8rem;</li>
        </ul>
      </div>
      <div class="two-col">
        <ul>
          <li>min-width:0 -- padding: 2rem 2rem;</li>
          <li>min-width:576 -- padding: 2rem 2rem;</li>
          <li>min-width:768 -- padding: 8rem 8rem;</li>
          <li>min-width:992 -- padding: 8rem 8rem;</li>
          <li>min-width:1200 -- padding: 8rem 8rem;</li>
        </ul>
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
.two{
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
  border: 1px solid green;
}
.two-col{
    width: 100%;
    @media (min-width: 768px) {
        width: 50%;
    };
    padding-right: 8rem;
    padding-bottom: 2rem;
    border: 1px solid red;
}

</style>
