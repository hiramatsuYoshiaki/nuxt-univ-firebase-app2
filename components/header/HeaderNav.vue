<template>
  <div class="headerBar">
    <div class="nav-menu">
      <div class="block b-left">
        left
      </div>
      <div class="block b-center">
        center
      </div>
      <div class="block b-right">
        right
      </div>
    </div>
    <div class="mobile-menu" :class="{ v_open_menu : active, v_close_menu : !active }">
      mobile-menu
    </div>
    <div class="menu-button">
      <div class="m-bar-wrap" @click="active = !active">
        <div class="upper-bar" :class="{ close_upper: active, open_upper: !active }" />
        <div class="under-bar" :class="{ close_under: active, open_under: !active }" />
      </div>
    </div>
    <!-- <div class="menu-button m-bar-position m-bar-display">
      <div class="m-bar-wrap" @click="active = !active">
        <div class="upper-bar" :class="{ close_upper: active, open_upper: !active }" />
        <div class="under-bar" :class="{ close_under: active, open_under: !active }" />
      </div>
    </div> -->

    <!-- <div class="m-menu-gb">
      bg
    </div> -->
    <!-- <div class="logo">
      logo
    </div> -->
    <!-- <div class="laptop-menu">
      <div class="links">
        <nuxt-link to="/">
          home
        </nuxt-link>
        <nuxt-link to="/works">
          Work
        </nuxt-link>
        <nuxt-link to="/about">
          About
        </nuxt-link>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </div>
    </div> -->
    <!-- <div class="menu-bar">
      bar
    </div> -->
    <!-- <div class="mobile-menu">
      <div class="links">
        <nuxt-link to="/">
          home
        </nuxt-link>
        <nuxt-link to="/works">
          Work
        </nuxt-link>
        <nuxt-link to="/about">
          About
        </nuxt-link>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      active: true
    }
  }
}
</script>
<style scoped lang="scss">
// @import "~/assets/sass/variable.scss";
%center{
    display:flex;
    justify-content: center;
    align-items: center;
}
.headerBar{
    position: relative ;
    // top: 0;
    // left: 0;
    width:100vw;
    // height:100%;
    // z-index: 1000;
    // height: $header-height;
    // background-color: transparent;
    // color: $header-text;
    border-bottom:1px solid rgba(250,250,250,.1);
    // cursor: pointer;
    background-color: #212121;
    margin:0;
    padding:0;
    // transform: translateY(-90%);
    // &:hover{
    //     transform: translateY(-90%);
    // }
    // @media(min-width: 992px){
    //   font-size: 4.0rem;
    // }
}
//nav-menu---------------------------------------
.nav-menu{
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height: $header-height;
    background-color:green;
}
//mobile-menu------------------------------------
.mobile-menu{
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height: calc(100vh + #{ $header-height });
    background-color:rgba(0,0,0,2);
    transform: translateY(-100vh);
}
.v_open_menu{
  // opacity: 0;
  transform: translateY(-100vh) ;
  transition: .5s .5s all ease;
}
.v_close_menu{
  // opacity: 1;
  transform: translateY(0) ;
  transition: .5s .5s all ease;
}
//menu-button------------------------------------
.menu-button{
    position:absolute;
    top:0;
    right:0;
    width: $header-height;
    height: $header-height;
    background-color: red;

}
.m-bar-wrap{
    position:relative;
    width:100%;
    height: 100%;
    overflow: hidden;
     cursor: pointer;
}
.upper-bar, .under-bar {
    position: absolute;
    top: calc(50% - 1px);
    right: calc(50% - 1rem);
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

</style>
