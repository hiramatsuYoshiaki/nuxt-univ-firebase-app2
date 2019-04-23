<template>
  <div class="MobileMenu">
    <!-- mobile menu -->
    <div class="m-menu-bg" :class="{ v_open_menu : active, v_close_menu : !active }" />
    <div
      class="m-bar m-bar-position m-bar-display"
      :class="{ dsp_bar: !active,
                'b-menu-items-left': mobileMenuPositionLeft,
                'b-menu-items-center': mobileMenuPositionCenter,
                'b-menu-items-right': mobileMenuPositionRight,
      }"
    >
      <div class="m-bar-wrap" @click="active = !active">
        <div class="upper-bar" :class="{ close_upper: active, open_upper: !active }" />
        <div class="under-bar" :class="{ close_under: active, open_under: !active }" />
      </div>
    </div>
    <!-- logo -->
    <div
      class="log-bar log-bar-positon log-side-space"
      :class="{'b-menu-items-left': logPositionLeft,
               'b-menu-items-center': logPositionCenter,
               'b-menu-items-right': logPositionRight,}"
    >
      <nuxt-link to="/">
        <!-- <a class="header-logo" @click="link_commit('home', '/')"> -->
        <img src="~/assets/img/logo/h-works1200x600white.svg" alt="h-works logo">
      <!-- </a> -->
      </nuxt-link>
    </div>
    <!-- laptop menu -->
    <nav class="laptop-menu">
      <div
        class="l-menu-bar l-menu-position l-menu-display l-menu-bar-side-space "
        :class="{
          'l-menu-items-left': mobileMenuPositionLeft,
          'l-menu-items-center': mobileMenuPositionCenter,
          'l-menu-items-right': mobileMenuPositionRight,
        }"
      >
        <div class="m-menu-wrap m-menu-position ">
          <div class="menu_items menu_items_row">
            <div class="menu-item-box">
              <nuxt-link to="/works" class="menu_link">
                WORKS
              </nuxt-link>
              <div class="menu_underline" />
            </div>
          </div>
        </div>

        <nav class="mobile-menu">
          <div class="m-menu">
            <div class="m-menu-wrap m-menu-position ">
              <section class="m-menu-section m-menu-section-start">
                <div class="d-flex-center-center" />
              </section>
              <section class="m-menu-section m-menu-section-start">
                <div class="d-flex-center-center">
                  <div class="menu_items menu_items_column">
                    <div class="menu-item-box">
                      <nuxt-link to="/works" class="menu_link">
                        WORKS
                      </nuxt-link>
                      <div class="menu_underline" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
//   name: 'MobileMenu',
  props: {
    msg: {
      type: String,
      default: ''
    },
    menuVisible: {
      type: String,
      default: ''
    },
    mobileBarType: {
      type: String,
      default: ''
    },
    mobileBarAction: {
      type: String,
      default: ''
    },
    mobileMenuPositionLeft: Boolean,
    mobileMenuPositionCenter: Boolean,
    mobileMenuPositionRight: Boolean,
    logPositionLeft: Boolean,
    logPositionCenter: Boolean,
    logPositionRight: Boolean
  },
  data() {
    return {
      active: true,
      scrollY: 0,
      isScroll: false
    //   logoSvgHWorksWhite: require('../../../assets/logo/h-works1200x600white.svg'),
    //   logoSvgHWorksBlack: require('../../../assets/logo/h-works1200x600black.svg'),
    //   logoSvg: require('../../../assets/logo/h-logo.svg')
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
      if (this.scrollY > 250) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    }
    // link_commit(link, link_path) {
    //   this.$store.commit(link)
    //   setTimeout(() => {
    //     this.$router.push({ path: link_path })
    //   }, 500)
    // }
  }
}
</script>
<style scoped lang="scss">
// @import "~/assets/sass/variable.scss";
.MobileMenu{
  position: fixed;
    width:100%;
    height: 100%;
    // height:$header-height; //5rem;
    position: absolute;
    display:block;
    top: 0;
    right: 0;
    z-index: 100;
    // border: 1px solid red;
    // cursor: pointer;
}
.m-menu-bg{
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100%;
  top: 0;
  left :0;
  background-color: $footer-color-color;
  color: #fff;
}
.v_open_menu{
  // opacity: 0;
  transform: translateY(-101%) ;
  transition: .5s .5s all ease;
}
.v_close_menu{
  // opacity: 1;
  transform: translateY(0) ;
  transition: .5s .5s all ease;
}
//logo bar------------------------------------
.log-bar-positon{
  position: absolute;
  z-index: 110;
  top: 0;
  // left: 0 ;
  // right: 0 ;
  // left: 50% ;
  // transform: translateX(-50%);
  margin:1rem 1rem;
}
.log-bar{
  width: 6rem;
  height: 3rem;
  cursor: pointer;
  border: 1px solid red;
//   &:hover{
//       border: 1px solid green;
//   }

}
.log-side-space{
  margin: 1rem 1rem;
  @media (min-width: 576px){
    margin: 1rem 4rem;
  }
  @media (min-width: 992px) {
    margin:1rem 8rem;
  }
}
.header-logo img{
    width: 6rem;
    height: 3rem;
}
//menu-humberger-menu
.m-bar-position{
  position: absolute;
  z-index: 110;
  // top: 0;
  // left: 0 ;
  // right: 0 ;
  margin:1rem 2rem;
  @media (min-width: 768px) {
    margin:1rem 4rem;
  }
}
.b-menu-items-left{
  // margin: 0 auto 0 0;
  top:0;
  left: 0;
}
.b-menu-items-center{
  // margin: 0 auto 0 auto;
  top: 0;
  // left: 0 ;
  // right: 0 ;
  left: 50% ;
  transform: translateX(-50%);
}
.b-menu-items-right{
  // margin: 0 0 0 auto;
  top:0;
  right: 0 ;
}
.m-bar{
    width:2rem;
    height:2rem;
    cursor: pointer;
}
.m-bar-display{
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
}
//ウインドウ表示の間にウインドウサイズ変更対応
.dsp_bar{
  display:block;
}

.m-bar-wrap{
    position:relative;
    width:100%;
    height: 100%;
    overflow: hidden;
}
.upper-bar, .under-bar {
    position: absolute;
    top: 50%;
    left: 0;
    width: 2rem;
    height: 2px;
    background-color: #fff;
}
.close_upper{
    transform-origin: center center;
    transform: translateY(-.25rem) ;
    transition: .5s all ease;
}
.open_upper{
    transform-origin: center center;
    transform: rotate(45deg) ;
    transition: .5s all ease;
}

.close_under{
    transform-origin: center center;
    transform: translateY(.25rem) ;
    transition: .5s all ease;
}
.open_under{
    transform-origin: center center;
    transform: rotate(-45deg) ;
    transition: .5s all ease;
}

//menu items --------
.menu_items{
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu_items_row{
  flex-direction: row;
}
.menu_items_column{
  flex-direction: column;
}
.menu-item-box{
  position:relative;
  overflow: hidden;
  margin: 0 1rem;
  padding: .3rem 0;
  .menu_underline{
    position:absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 2px;
    margin-top: .2rem;
    // transition: .1s all ease-in;
    transform: translateX(-101%);
  }
  &:hover{
    .menu_underline{
      transition: .5s all ease-in;
      transform: translateX(0);
    }
  }
}
.menu_link{
    display: inline-block;
    opacity: .5;
    text-transform: uppercase;
    &:hover{
      opacity: .75;
    }
}
.menu_item_visible{
  opacity: 1;
  pointer-events: none;
}

//laptop menu
.l-menu-position{
  position: absolute;
  z-index: 110;

}
.l-menu-items-left{
  // margin: 0 auto 0 0;
  top:0;
  left: 0;
}
.l-menu-items-center{
  // margin: 0 auto 0 auto;
  top: 0;
  // left: 0 ;
  // right: 0 ;
  left: 50% ;
  transform: translateX(-50%);
}
.l-menu-items-right{
  // margin: 0 0 0 auto;
  top:0;
  right: 0 ;
}
.l-menu-bar{
    width:33.33%;
    height:100%;
    cursor: pointer;
    background-color: rega(250,250,250,.5);
}
.l-menu-bar-side-space{
    padding: 0 10rem;

}
.l-menu-display{
  display: none !important;
  @media (min-width: 992px) {
    display: block !important;
  }
}

// mobile menu --------
.m-menu{
  position:fixed;
  z-index: 101;
  top:0;
  left:0;
  // width:100%;
  // height:100%;
  width:100vw;
  height:100vh;
}
.m-menu-wrap{
  position:relative;
  width: 100%;
  height: 100%;
}
.m-menu-position{
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: row;
  flex-direction: column;
}
.m-menu-section{
 width: 100%;
 margin: .5rem;
 padding: .5rem;
}

//section animatin right-in
.m-menu-section-start{
   transform: translateX(100%) ;
   transition: .5s  all ease;
   opacity: 0;
}
.v_tran_slide_rightIn{
   transform: translateX(0) ;
   transition: .5s .75s all ease;
   opacity: 1;
}

</style>
