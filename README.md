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
```
npm install --save-dev node-sass sass-loader
```

```
export default {
  css: [
    // プロジェクト内の SCSS ファイル
    '@/assets/sass/styles.scss'
  ]
}
```
