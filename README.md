# nuxt-univ-app1

> My peachy Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# eslint
✖ 7 problems (7 errors, 0 warnings) 
  7 errors, 0 warnings potentially fixable with the `--fix` option. 
  
Solved adding fix option in nuxt.config.jsfile: 
```
extend(config, ctx) {
    if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
            enforce : 'pre',
            test    : /\.(js|vue)$/,
            loader  : 'eslint-loader',
            exclude : /(node_modules)/,
            options : {
                fix : true
            }
        });
    }
}
```
ex.https://github.com/nuxt/nuxt.js/issues/1628 
 


# cssプロパティ 
sass を利用したい場合は node-sass および sass-loader パッケージをインストールしてください。 
1. install 
```
npm install --save-dev node-sass sass-loader
```
2. nuxt.config　setting 
```
export default {
  css: [
    // プロジェクト内の SCSS ファイル
    '@/assets/sass/styles.scss'
  ]
}
```
3. component style setting 
~~~
    <style scoped lang="scss">
    </style>
~~~
 
# SASS変数をvueファイルで使う 
importの記述なしで使う。
1. install 
```
npm install --save-dev @nuxtjs/style-resources
```
2. nuxt.config setting 
```
modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: [
      '~/assets/sass/variable.scss',
    ],
  },
```
3. usage 
```
<style scoped lang="scss">
//@import "../../../assets/scss/common/data/thema.scss";
.container {
    color: $text-color
}
</style>
```
# autoprefixer の設定をカスタマイズする
Nuxt.js で CSS(Sass) をコンパイルすると、 autoprefixer がベンダープレフィクスを自動で適用してくれます。 
1. nuxt.config setting 
```
build: {
  postcss: [
    require('autoprefixer')({
      browsers: ['IE 11', 'last 2 versions' ],
      grid: true
    })
  ]
}

```
2. autoprefixer デフォルト設定 
```
1%, last 2 versions, Firefox ESR
```
1%:1%以上のシェアがあるブラウザ 
last 2 versions:最後の2バージョンのブラウザ 
Firefox ESR:最新のFirefox ESR版  
3.対応ブラウザの確認
https://browserl.ist/?q=%3E+1%25%2C+last+2+versions%2C+Firefox+ESR 
  
参考ページ:https://parashuto.com/rriver/tools/using-custom-data-for-autoprefixer 

# Google Analytics
1. install 
```
npm install --save @nuxtjs/google-analytics
```
2.アナリティクスのトラッキング IDを設定する 
```
modules: [
  ['@nuxtjs/google-analytics', { id: 'UA-xxxxx-x' }],
],
```
# Google Serch Colsole
1. Google Serch Colsoleからメタタグを取得
2. nuxt.config setting
```
head: {
   
    meta: [
      { name: "google-site-verification",
        content: "TaWpD9i4R5GSPzJjnTc8--t-g8bbDKbfxQX-e1kgio0" },
    ],
  },
```

