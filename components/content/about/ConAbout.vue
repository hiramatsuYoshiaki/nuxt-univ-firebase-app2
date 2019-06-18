<template>
  <div class="aboutIntro">
    <div class="flex-container">
      <div class="side-col">
        <p>Demoの使い方</p>
        <div v-for="(mdData, index) in mdDatas" :key="index">
          <p
            class="topMenu "
            :class="{ activeTopMenu : selectMenu === index}"
            @click="menuActive(index)"
          >
            {{ mdData.topMenu }}
          </p>
          <div v-if="selectMenu === index">
            <div v-for="(usage, index) in mdData.usages" :key="index">
              <div class="subMneu">
                {{ usage.subMenu }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-col">
        <div v-for="(mdData, index) in mdDatas" :key="index">
          <div class="topMain h1-res">
            {{ mdData.topMenu }}
          </div>

          <div v-for="(usage, index) in mdData.usages" :key="index">
            <div class="subMainTitle">
              <div class="h3-res">
                {{ usage.title }}
              </div>
            </div>
            <div class="subMainDescription">
              <p>{{ usage.Description }}</p>
            </div>

            <div v-for="(operation, index) in usage.operations" :key="index">
              <div class="subMainOperation">
                {{ index + 1 }}.  {{ operation.opeTitle }}
              </div>
              <div class="subMainComandWrap">
                <div v-for="(comand, index) in operation.comands" :key="index">
                  <div class="subMainComand">
                    <div v-html="$md.render(comand.cmd)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-html="$md.render(model)" /> -->
        <!-- <div v-html="$md.render(model2)" />
        <div v-html="readMe" /> -->
      </div>
    </div>
  </div>
</template>
<script>
// import readMe from '~/assets/readMe/readMe.md'
// import TransitionScreen from '~/components/transition/TransitionScreen.vue'

//       img: require('~/assets/img/img3668.jpg'),
export default {
//   props: {
//     pageTitle: {
//       type: String,
//       default: 'a'
//     },
//   }
  data() {
    return {
    //   model: `# Hello World!`,
    //   model2: `# nuxt.js!`,
      selectMenu: null,
      //   isActiveMenu: [],
      //   isActive: false,

      mdDatas: [
        {
          topMenu: `１．プロジェクトを作る`,
          topMenuMd: `１．プロジェクトを作る`,
          usages: [
            {
              subMenuId: 1,
              subMenu: 'GitHub リモートリポジトリをcloneする',
              title: ' GitHubリポジトリをcloneしてローカルプロジェクトを作る',
              Description: 'プロジェクトホルダーを作成し、GitHubからローカルにデモアプリケーションをコピーします。',
              operations: [
                {
                  opeTitle: 'リモートリポジトリをcloneする。',
                  comands: [
                    {
                      cmd: '    $ git clone https://github.com/hiramatsuYoshiaki/nuxt-univ-app1.git'
                    }
                  ]
                },
                {
                  opeTitle: 'インストールする',
                  comands: [
                    {
                      cmd: '    $ npm install'
                    }
                  ]
                },
                {
                  opeTitle: ' サーバーを立ち上げて確認',
                  comands: [
                    {
                      cmd: '    $ npm run dev'
                    }
                  ]
                },
                {
                  opeTitle: 'ローカルサーバーへアクセス',
                  comands: [
                    {
                      cmd: '    http://localhost:3000/で確認する。'
                    }
                  ]
                }
              ]
            },
            {
              subMenuId: 2,
              subMenu: 'GitHub 新規リポジトリを作成する。',
              title: ' GitHub リポジトリの作成',
              Description: '新規プロジェクト用のリポジトリを作り、チーム開発のバージョン管理を行います。',
              operations: [
                {
                  opeTitle: 'GitHub ログイン後のトップページから、Repositories の New ボタンをクリックします。',
                  comands: [
                    {
                      cmd: `    「NEW」または、「Start a project」ボタンを押す。`
                    }
                  ]
                },
                {
                  opeTitle: 'Create a new repository の画面に遷移するので、リポジトリ名、ライセンス等を入力する。',
                  comands: [
                    {
                      cmd: `    Repository name: リポジトリ名`
                    },
                    {
                      cmd: '    Description: 簡単な説明'
                    },
                    {
                      cmd: '    publicにチェックを入れる'
                    },
                    {
                      cmd: '    Initialize this repository with a READMEはチェックせず画面下のほうにある 「Create repository」 ボタンをクリックします。'
                    }
                  ]
                },
                {
                  opeTitle: 'プロジェクトを GitHub に Push する',
                  comands: [
                    {
                      cmd: '    git add .'
                    },
                    {
                      cmd: '    git commit -m "first commit"'
                    },
                    {
                      cmd: '    git remote add origin https://github.com/リポジトリ名/プロジェクト名'
                    },
                    {
                      cmd: '    git push -u origin master'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          topMenu: `２．ホスティングする。`,
          topMenuMd: `２．ホスティングする。`,
          usages: [
            {
              subMenuId: 1,
              subMenu: 'Netlifyへホスティングする。',
              title: ' Netlifyへホスティングする。',
              Description: 'GitHubリポジトリのマージから、Netlifyの自動ディプロイで、ホスティングする。',
              operations: [
                {
                  opeTitle: 'Netlifyログインし、画面右上の「New site from Git」を押す。',
                  comands: [
                    {
                      cmd: '    「New site from Git」を押す。'
                    }
                  ]
                },
                {
                  opeTitle: '「Github」を押し、リポジトリを選択する。',
                  comands: [
                    {
                      cmd: '    リポジトリを選択'
                    }
                  ]
                },
                {
                  opeTitle: ' Create a new site画面で各項目を入力し、「Deploy site」ボタンを押す。',
                  comands: [
                    {
                      cmd: '    Owner: チーム名'
                    },
                    {
                      cmd: '    Branch to deploy: master'
                    },
                    {
                      cmd: '    Build command: nuxt generate'
                    },
                    {
                      cmd: '    Publish directory: dist'
                    },
                    {
                      cmd: '    Deploy site」ボタンを押す。'
                    },

                    {
                      cmd: '    Netlifyのサイトにアクセスして確認する'
                    }

                  ]
                }

              ]
            }

          ]
        },
        { topMenu: `３．Nuxt.config設定変更`,
          topMenuMd: `３．Nuxt.config設定変更`,
          usages: [
            {
              subMenuId: 1,
              subMenu: 'SASSを使う',
              title: ' SASSを使う',
              Description: 'SASSを利用したい場合は node-sass および sass-loader パッケージをインストールします。',
              operations: [
                {
                  opeTitle: 'node-sass sass-loaderをインストールする。',
                  comands: [
                    {
                      cmd: `
    $ npm install --save-dev node-sass sass-loader
                      `
                    }
                  ]
                },
                {
                  opeTitle: 'nuxt.configに設定を追記する。',
                  comands: [
                    {
                      cmd: `
    export default {
        css: [
            // プロジェクト内の SCSS ファイル
            '@/assets/sass/styles.scss'
        ]
    }
                      `
                    }
                  ]
                },
                {
                  opeTitle: ' component styleタグを変更する',
                  comands: [
                    {
                      cmd: '    <style scoped lang="scss">'
                    },
                    {
                      cmd: '    </style>'
                    }
                  ]
                }
              ]
            },
            {
              subMenuId: 2,
              subMenu: 'SASS変数を使う',
              title: ' SASS変数を使う',
              Description: 'SASS変数をimportなしで利用したい場合は @nuxtjs/style-resources パッケージをインストールします。',
              operations: [
                {
                  opeTitle: '@nuxtjs/style-resourcesrをインストールする。',
                  comands: [
                    {
                      cmd: `
    $ npm install --save-dev @nuxtjs/style-resources
                      `
                    }
                  ]
                },
                {
                  opeTitle: 'nuxt.configに設定を追記する。',
                  comands: [
                    {
                      cmd: `
    modules: [
      '@nuxtjs/style-resources',
    ],

    styleResources: {
      sass: [
        '~/assets/sass/variable.scss',
        ],
    },
                      `
                    }
                  ]
                },
                {
                  opeTitle: ' sass変数をimportなしで使えます。例',
                  comands: [
                    {
                      cmd: `
    <style scoped lang="scss">
        //@import "../../../assets/scss/common/data/thema.scss";
        .container {
            color: $text-color
        }
    </style>
                      `
                    }
                  ]
                }
              ]
            },
            // eslintのフォーマットエラーの解消
            {
              subMenuId: 3,
              subMenu: 'eslintフォーマットエラー',
              title: ' eslintフォーマットエラー',
              Description: 'アプリを起動するたびにeslintのエラーが発生し、「--fixオプションで修正可能な可能性があります」と表示されるエラー対応。',
              operations: [
                {
                  opeTitle: ' eslintrc.jsに設定追記する。',
                  comands: [
                    {
                      cmd: `
    extend(config, ctx) {
        if (ctx.dev && ctx.isClient) {
            config.module.rules.push({
                enforce : 'pre',
                test    : /.(js|vue)$/,
                loader  : 'eslint-loader',
                exclude : /(node_modules)/,
                options : {
                    fix : true
                }
            });
        }
    } 
                      `
                    }
                  ]
                }
              ]
            },
            // Google Serch Colsole
            {
              subMenuId: 4,
              subMenu: 'Google Serch Colsole',
              title: ' Google Serch Colsoleを使う',
              Description: 'Google Serch Colsoleの設定を行う。',
              operations: [
                {
                  opeTitle: 'Google Serch Colsoleからメタタグを取得',
                  comands: [
                    {
                      cmd: `
    TaWpD9i4R5GSPzJjnTc8--t-g8bbDKbfxQX-e1kgio0 
                      `
                    }
                  ]
                },
                {
                  opeTitle: 'nuxt.config に設定をする。',
                  comands: [
                    {
                      cmd: `
    head: {
   
        meta: [
        { name: "google-site-verification",
            content: "TaWpD9i4R5GSPzJjnTc8--t-g8bbDKbfxQX-e1kgio0" },
        ],
    },
                      `
                    }
                  ]
                }

              ]
            },
            // Google Analytics
            {
              subMenuId: 5,
              subMenu: 'Google Analytics',
              title: ' Google Analyticsを使う',
              Description: 'Google Analyticsを使うための設定を行う。',
              operations: [
                {
                  opeTitle: '@nuxtjs/google-analyticsをインストールする。',
                  comands: [
                    {
                      cmd: `
    $ npm install --save @nuxtjs/google-analytics 
                      `
                    }
                  ]
                },
                {
                  opeTitle: 'nuxt.configにアナリティクスのトラッキング IDを設定する。',
                  comands: [
                    {
                      cmd: `
    modules: [
        ['@nuxtjs/google-analytics', { id: 'UA-xxxxx-x' }],
    ],
                      `
                    }
                  ]
                }

              ]
            },
            // サイトマップ自動生成
            {
              subMenuId: 6,
              subMenu: 'サイトマップ自動生成',
              title: ' サイトマップ自動生成',
              Description: 'Nuxt.jsで静的ファイル生成時(npm run generate)にサイトマップも自動生成する。。',
              operations: [
                {
                  opeTitle: '@nuxtjs/sitemapをインストールする。',
                  comands: [
                    {
                      cmd: `
    $ npm install --save @nuxtjs/sitemap 
                      `
                    }
                  ]
                },
                {
                  opeTitle: 'nuxt.configに設定を追記する。',
                  comands: [
                    {
                      cmd: `
    modules: [
        '@nuxtjs/sitemap',
    ],
    sitemap: {
        // path: '/sitemaps.xml',//Default: sitemaps.xml
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
                      `
                    }
                  ]
                }

              ]
            },

            // eslintrc.js console.log使用
            {
              subMenuId: 7,
              subMenu: 'eslintrc.js',
              title: ' eslintrc.js',
              Description: 'consol.logをしようするための、eslintrc.jsの設定をする。',
              operations: [
                {
                  opeTitle: 'eslintrc.js.jsに設定する。',
                  comands: [
                    {
                      cmd: `
    module.exports = {
    rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
        }
    } 
                      `
                    }
                  ]
                }

              ]
            }

          ]
        },
        {
          topMenu: `４．開発作業`,
          topMenuMd: `４．開発作業`,
          usages: [
            {
              subMenuId: 1,
              subMenu: 'assets ディレクトリ',
              title: ' assets ディレクトリ',
              Description: 'assets ディレクトリには Stylus や SASS、 Image、 Font のようなコンパイルされていないファイルを入れます。',
              operations: [
                {
                  opeTitle: 'SASSディレクトリーの stylies.scssでパーシャルファイルを読み込みます。dataディレクトリーには、SASS変数があります。',
                  comands: [
                    {
                      cmd: '    stylies.scss'
                    },
                    {
                      cmd: '    variable.scss'
                    },
                    {
                      cmd: '    commn/'
                    },
                    {
                      cmd: '    --| _normalize.scss '
                    },
                    {
                      cmd: '    --| _gloval.scss など'
                    },
                    {
                      cmd: '    --| data/'
                    },
                    {
                      cmd: '    -----| _thema.scss '
                    },
                    {
                      cmd: '    component/'
                    },
                    {
                      cmd: '    --| navbar.scss など'
                    }
                  ]
                },
                {
                  opeTitle: 'imgディレクトリーのlogoにロゴSVGがあります。',
                  comands: [
                    {
                      cmd: '    image.jpg など'
                    },
                    {
                      cmd: '    logo/'
                    },
                    {
                      cmd: '    --| h-logo.svg など'
                    }
                  ]
                }

              ]
            },
            {
              subMenuId: 2,
              subMenu: 'components ディレクトリ',
              title: ' components ディレクトリ',
              Description: 'components ディレクトリには Vue.js のコンポーネントファイルを入れます。これらのコンポーネントでは asyncData や fetch を使うことはできません。',
              operations: [
                {
                  opeTitle: 'components ディレクトリ構成',
                  comands: [
                    {
                      cmd: `    content`
                    },
                    {
                      cmd: '    works/'
                    },
                    {
                      cmd: '    --| ConWorks.vue'
                    },
                    {
                      cmd: '    about/'
                    },
                    {
                      cmd: '    --| ConAbout.vue'
                    },
                    {
                      cmd: '    contact/'
                    },
                    {
                      cmd: '    --| ConContact.vue'
                    },
                    {
                      cmd: `    header`
                    },
                    {
                      cmd: '    --| header.vue '
                    },
                    {
                      cmd: `    transition`
                    },
                    {
                      cmd: '    --| transition.svg '
                    },
                    {
                      cmd: `    logo.vue`
                    }
                  ]
                }

              ]
            },
            {
              subMenuId: 3,
              subMenu: 'layouts ディレクトリ',
              title: ' layouts ディレクトリ',
              Description: 'layouts ディレクトリはアプリケーションのレイアウトを含みます。レイアウトはページの外観を変更するために使用されます',
              operations: [
                {
                  opeTitle: 'layouts/topPage.vue',
                  comands: [
                    {
                      cmd: `[layouts/topPage.vueの内容は、Github issue をみてください。](https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/33)`
                    }
                  ]
                }
              ]
            },
            {
              subMenuId: 4,
              subMenu: 'page ディレクトリ',
              title: ' page ディレクトリ',
              Description: 'pages ディレクトリにはアプリケーションのビュー及びルーティングファイルを入れます。Nuxt.js フレームワークはこのディレクトリ内のすべての *.vue ファイルを読み込み、アプリケーションのルーターを作成します。',
              operations: [
                {
                  opeTitle: '個別のページへのHTMLのheadタグを設定する',
                  comands: [
                    {
                      cmd: `[landingページの head メソッドの内容は、Github issue をみてください。](https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/43)`
                    },
                    {
                      cmd: `[worksページの head メソッドの内容は、Github issue をみてください。](https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/41)`
                    },
                    {
                      cmd: `[aboutページの head メソッドの内容は、Github issue をみてください。](https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/40)`
                    },
                    {
                      cmd: `[contactページの head メソッドの内容は、Github issue をみてください。](https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/42)`
                    }
                  ]
                }
              ]
            },
            {
              subMenuId: 5,
              subMenu: 'store ディレクトリ',
              title: ' store ディレクトリ',
              Description: 'store ディレクトリには Vuex ストア のファイルを入れます。Vuex ストアは Nuxt.js に付属していますが、デフォルトでは無効になっています。このディレクトリに index.js　ファイルを作成するとストアが有効になります。',
              operations: [
                {
                  opeTitle: 'store/index.js',
                  comands: [
                    {
                      cmd: `[store/index.js の詳細設定は、Github issue をみてください。](https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/34)`
                    }
                  ]
                }

              ]
            }
          ]
        }

      ]
    }
  },
  //   computed: {
  // page() {
  //   return this.$store.state.page
  // }

  // readMe() {
  //   return readMe
  // }

  //   },
  methods: {
    menuActive(index) {
      if (this.selectMenu === index) {
        this.selectMenu = null
        // this.isActiveMenu[index] = false
      } else {
        this.selectMenu = index
        // this.isActiveMenu[index] = true
      }
    }
  }
//   created: function () {
//     this.isMenu = false
//   }
//   methods: {
//     link_commit(linkPath) {
//       this.active = true
//       this.$store.commit('pagePathSet', linkPath)
//       setTimeout(() => {
//         this.$router.push({ path: linkPath })
//       }, 500)
//     }
//   }
}
</script>
<style scoped lang="scss">
.aboutIntro{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 2rem;
//   @media (min-width: 992px) {
//       padding: 8rem 8rem;
//   };
//   border: 1px solid  rgba(0,0,0,.2);
}
.flex-container{
  width: 100%;
  display: flex;
//   flex-direction: column;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
//   @media (min-width: 768px) {
//       flex-direction: row;
//   };
}
.side-col{
    width: 100%;
    display: none;
    @media (min-width: 992px) {
        width: 30%;
        display: block;
        padding-right: 10rem;
    };
    // padding-right: 8rem;
    // padding-bottom: 2rem;
    padding: 2rem;
    section{
      margin-bottom: 2rem;
    }
    // h3{
    //   color:#000000;
    //   font-weight: 600;
    // }
    p{
      color:rgb(70, 69, 69);
    }
    // border: 1px solid  rgba(0,0,0,.2);

}
.main-col{
    width: 100%;
    @media (min-width: 992px) {
        width: 70%;
        padding-right: 10rem;
        padding: 2rem;
    };
    section{
      margin-bottom: 2rem;
    }
    // p{
    //   color:rgb(70, 69, 69);
    // }

}
.topMenu{
    color:rgb(70, 69, 69);
    font-weight: 500;
    cursor: pointer;
    padding:0.5rem ;
}

.activeTopMenu{
    background-color: lightgreen;
    border-radius: 2px;
    color: red;
}
.subMneu{
    padding-left: 1.5rem;
}

.topMain{
    border-bottom: 1px solid green;
    margin: 6rem 2rem 2rem 0;

}

.subMainTitle{
    margin: 2rem 2rem 2rem 2rem;
    @media (min-width: 992px) {
        margin: 6rem 2rem 2rem 2rem;
    };

}
.subMainDescription{
    // p{
    //     color: gray;
    // }
    margin: 2rem 2rem 2rem 2rem;
}
.subMainOperation{
    // p{
    //     color: gray;
    // }
    margin: 2rem 2rem 2rem 2rem;
}
.subMainComandWrap{
    background-color: rgb(150, 159, 165);
    padding: 1rem;
    border-radius: 2px;
    font-size: 1rem;
}
.subMainComand{
    font-size: 1.6rem;
    line-height: 2rem;
}
.h1-res{
    color: rgb(5, 121, 5);
    font-weight:700;
    font-size: 2rem;
    @media (min-width: 992px) {
        font-size: 4rem;
    };
}
.h3-res{
    color: rgb(53, 53, 53);
    font-weight:700;
    font-size: 2rem;
    @media (min-width: 992px) {
        font-size: 4rem;
    };
}
p{
    color:rgb(70, 69, 69);
}

</style>
