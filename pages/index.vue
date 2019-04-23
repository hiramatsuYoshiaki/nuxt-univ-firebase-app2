<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        h-works
      </h1>
      <h2 class="subtitle">
        Nuxt.js Universal
      </h2>
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div> -->
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
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'topPage',
  components: {
    Logo
  }
}
</script>

<style>
/* .container{
  margin-top: 10rem;
} */
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
