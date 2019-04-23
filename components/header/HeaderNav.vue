<template>
  <div class="headerBar">
    <div class="m-menu-gb">
      bg
    </div>
    <div class="logo">
      logo
    </div>
    <div class="laptop-menu">
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
    </div>
    <div class="menu-bar">
      bar
    </div>
    <div class="mobile-menu">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/sass/variable.scss";
.headerBar{
    // position: absolute ;
    // top: 0;
    // left: 0;
    // width:100%;
    // height:100%;
    // z-index: 1000;
    // height: $header-height;
    // background-color: transparent;
    // color: $header-text;
    border-bottom:1px solid rgba(250,250,250,.1);
    // cursor: pointer;
    // background-color: red;
    // transform: translateY(-90%);
    // &:hover{
    //     transform: translateY(-90%);
    // }
    // @media(min-width: 992px){
    //   font-size: 4.0rem;
    // }
}

</style>
