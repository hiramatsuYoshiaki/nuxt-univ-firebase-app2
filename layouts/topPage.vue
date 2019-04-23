<template>
  <div class="topPage">
    <HeaderNav />

    <!-- <div>HeaderBar</div> -->
    <!-- <HeaderBar
      msg="HeaderBar"
      nav-menu="home"
      :header-scroll-type="true"
      :header-fixed-type="false"
      :header-stiky-type="false"
      :logo-position-left="true"
      :logo-position-center="false"
      :logo-position-right="false"
    /> -->
    <!-- <HeaderNav
      msg="HeaderBar"
      nav-menu="home"
      :header-scroll-type="true"
      :header-fixed-type="false"
      :header-stiky-type="false"
      :logo-position-left="true"
      :logo-position-center="false"
      :logo-position-right="false"
    /> -->
    <nuxt />
    <div>TransitionScreen</div>
    <!-- </headerbar> -->
  </div>
</template>
<script>
// import Logo from '~/components/Logo.vue'
// import HeaderBar from '~/components/header/HeaderBar.vue'
import HeaderNav from '~/components/header/HeaderNav.vue'

export default {
  layout: 'topPage',
  components: {
    // Logo
    // HeaderBar
    HeaderNav
  }
}
</script>
<style scoped lang="scss">
@import "~/assets/sass/variable.scss";
// .topPage{
//   position: absolute;
//   position: relative;
//   margin: 0;
//   padding:0;
//   cursor: pointer;
// }
// .topPage{
//     background-color: red;
// }
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

*/

</style>
