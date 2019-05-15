import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { name: "google-site-verification",
        content: "TaWpD9i4R5GSPzJjnTc8--t-g8bbDKbfxQX-e1kgio0" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/x-icon', href: '/h-logo-white.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  // css: [
  // ],
  css: [
    // Node.js モジュールを直接ロードする (ここでは SASS ファイル)
    // 'bulma',
    // プロジェクト内の CSS ファイル
    // '@/assets/css/main.css',
    // プロジェクト内の SCSS ファイル
    // '@/assets/sass/main.scss'
    '@/assets/sass/styles.scss'
    // { src: '~/assets/sass/main.scss', lang: 'scss' },
    // { src: '~/assets/sass/stylus.scss', lang: 'scss' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', { id: 'UA-35511262-5' }],
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit'
  ],
  styleResources: {
    sass: [
      '~/assets/sass/variable.scss',
    ],
  },
  sitemap: {
    // path: '/sitemap.xml',//Default: sitemap.xml
    hostname: 'https://romantic-kare-6d357c.netlify.com/',
    generate: true,
    // exclude: [
    //   '/admin'
    // ],
    routes:[
      "/",
      {
        url: '/works',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      "/about",
      "/contact"
    ]
  },
  markdownit: {
    preset: 'default',
    injected: true, 
    breaks: true, 
    html: true, 
    linkify: true,
    typography: true, 
    xhtmlOut: true,
    langPrefix: 'language-',
    quotes: '“”‘’',
    highlight: function (/*str, lang*/) { return ''; },
  },
    
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    },
    //autoprefixer
    postcss: [
      require('autoprefixer')({
        browsers: ['IE 11', 'last 2 versions' ],
        grid: true
      })
    ],
    

  }
}
