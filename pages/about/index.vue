<template>
  <section class="container">
    <h1>contact about</h1>
    <div class="links">
      <nuxt-link to="/">
        HOME
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
    <div>
      <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1">
        <div>GitHub</div>
        <div>hiramatsuYoshiaki/nuxt-univ-app1</div>
        <div>master/editer</div>
        <div>https://github.com/hiramatsuYoshiaki/nuxt-univ-app1</div>
        <div>GitHub  Page</div>
        <div>https://hiramatsuyoshiaki.github.io/nuxt-univ-app1/</div>
      </a>
    </div>
    <div>
      <a href="https://app.netlify.com/sites/romantic-kare-6d357c/overview">
        <div>Netlify</div>
        <div>Yoshiaki Hiramatsu team</div>
        <div>romantic-kare-6d357c</div>
        <div>https://romantic-kare-6d357c.netlify.com</div>
      </a>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'topPage'
//   transition: 'content-slide'
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
  margin-top: $header-height;
  padding: 2rem;
  @media (min-width: 992px){
    padding: 5rem;
  }
  @extend %center;
  flex-direction: column;
}
</style>
