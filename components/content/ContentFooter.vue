<template>
  <div class="contentFooter">
    <div class="footerTop">
      <div class="logo-wrap">
        <a @click="link_commit('/')">
          <img class="logo-img" src="~/assets/img/logo/h-works1200x600white.svg" alt="h-works logo">
        </a>
      </div>
    </div>
    <div class="footer-sepalater">
      <div class="line" />
    </div>
    <nav class="footer-menu">
      <div class="menu_items">
        <div class="menu-item-box">
          <a
            class="menu_link"
            :class="{ menu_item_visible: page === '/works' }"
            @click="link_commit('/works')"
          >
            Works
          </a>
          <div class="menu_underline" />
        </div>

        <div class="menu-item-box">
          <a
            class="menu_link"
            :class="{ menu_item_visible: page === '/about' }"
            @click="link_commit('/about')"
          >
            ABOUT
          </a>
          <div class="menu_underline" />
        </div>
        <div class="menu-item-box">
          <a
            class="menu_link"
            :class="{ menu_item_visible: page === '/plan' }"
            @click="link_commit('/plan')"
          >
            PLAN
          </a>
          <div class="menu_underline" />
        </div>
        <div class="menu-item-box">
          <a
            class="menu_link"
            :class="{ menu_item_visible: page === '/contact' }"
            @click="link_commit('/contact')"
          >
            CONTACT
          </a>
          <div class="menu_underline" />
        </div>
      </div>
    </nav>
    <div class="footer-bottom">
      <div class="footer-bottom-wrap">
        <div class="copy-light">
          © 2019 h-works.
        </div>
        <a href="#top">
          <div>TOP</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    page() {
      return this.$store.state.page
    }
  },
  methods: {
    link_commit(linkPath) {
      this.active = true
      this.$store.commit('pagePathSet', linkPath)
      setTimeout(() => {
        this.$router.push({ path: linkPath })
      }, 500)
    }
  }
}
</script>
<style scoped lang="scss">
.contentFooter{
  position: relative;
  width: 100%;
  height: 100%;

  background-color: $footer-color-color;
  color: $footer-color-text;
  padding: 2rem 2rem;
  @media (min-width: 768px) {
      padding: 8rem 8rem;
  };
}
//footertop------------------------------------
.footer-top{
 position: relative;
 width:100%;
 height: 20rem;
 padding: 0rem;
}
//logo ----------------------------------------
.logo-wrap{
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.logo-img{
  width: 15rem;
  height: auto;
}
//sepalater-------------------------------------
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
// menu----------------------------------------------
.menu_items{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 992px){
    flex-direction: row;
  }
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
//footer-----------------------------------
.footer-bottom{
  position: relative;
  width:100%;
  height: 20rem;
  @media (min-width: 992px){
    height: 10rem;
  }
}
.footer-bottom-wrap{
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%,0%);
  @media ( min-width: 992px){
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  z-index:1;
  width:80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  @media ( min-width: 992px){
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
}
.footer-bottom-wrap .copy-light {
  flex-basis: auto;
  @media ( min-width: 992px){
    flex-basis: 50%;
  }
}
</style>
