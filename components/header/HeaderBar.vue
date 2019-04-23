<template>
  <!-- <div class="headerBar">
    header bar component
  </div> -->
  <div
    id="Top"
    class="headerBar "
    :class="{
      scroll: headerFixedType ,
      fixed: headerFixedType ,
      fadeOut: isScroll && headerStikyType }"
  >
    <!-- <mobileMenu /> -->
    <nav class="nav-side-space">
      <MobileMenu
        msg="mobileMenu"
        :menu-visible="navMenu"
        mobile-bar-type="fullScreen"
        mobile-bar-action="Down"
        :mobile-menu-position-left="false"
        :mobile-menu-position-center="false"
        :mobile-menu-position-right="true"
        :log-position-left="true"
        :log-position-center="false"
        :log-position-right="false"
      />
    </nav>
  </div>
</template>
<script>
import MobileMenu from '@/components/header/NavComponent/MobileMenu.vue'
export default {
  name: 'HeaderBar',
  components: {
    MobileMenu
  },
  props: {
    msg: {
      type: String,
      default: ''
    },
    navMenu: {
      type: String,
      default: ''
    },
    headerScrollType: Boolean,
    headerFixedType: Boolean,
    headerStikyType: Boolean,
    // scroll: Number,
    logoPositionLeft: Boolean,
    logoPositionCenter: Boolean,
    logoPositionRight: Boolean
  },
  data() {
    return {
      scroll: 250,
      scrollY: 0,
      isScroll: false

    //   logoSvgHWorksWhite: require('../../assets/logo/h-works1200x600white.svg'),
    //   logoSvgHWorksBlack: require('../../assets/logo/h-works1200x600black.svg'),
    //   logoSvg: require('../../assets/logo/h-logo.svg')
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      if (this.scrollY > this.scroll) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    }
  }
}
</script>
<style scoped lang="scss">
// @import "~/assets/sass/variable.scss";
.headerBar{
    position: absolute ;
    top: 0;
    left: 0;
    // width:100%;
    width:100vw;
    z-index: 1000;
    height: $header-height;
    background-color: transparent;
    color: $header-text;
    border-bottom:1px solid rgba(250,250,250,.1);
    // cursor: pointer;
}
.scroll{
  position: absolute !important;
}
.fixed{
  position: fixed !important;
}
.fadeOut{
    display:none !important;
}
.headerBar nav{
    position: relative;
    width:100%;
    height:100%;
}
.headerBar .nav-side-space{
    padding: 0 1rem;
    @media (min-width: 576px){
       padding: 0 10rem;
    }
}
.headerBar .nav-item{
    padding: 1rem 1rem;
    a{
        display: block;
    }
}
.header-logo img{
    width: 12rem;
    height: 6rem;
}
</style>
