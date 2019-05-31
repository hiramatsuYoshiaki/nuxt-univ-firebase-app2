<template>
  <div class="container">
    <!-- <transition name="mainCon" appear> -->
    <div class="content-header" :style="{ 'background-image': 'url(' + dockerBg3 + ')' }">
      <div class="content con-wraper">
        <div class="con-hed-logo">
          <logo />
        </div>
        <div class="con-hed-title">
          <h1 class="title">
            h-works
          </h1>
          <h2 class="subtitle">
            Nuxt.js Universal SSR
          </h2>

          <h2 class="subtitle">
            GitHub + CircleCI + Firebase
          </h2>
          <!-- <buttn class="btn-sign-in">
            Sing in Google Account
          </buttn> -->
          <!-- <div class="btn-sign-in">
            <nuxt-link to="/login" class="sign-in-text">
              Sign in Google Account
            </nuxt-link>
          </div> -->
          <br>
          <p>Firebase Demo</p>
          <div class="btn-box">
            <a @click="link_commit('/login')">
              Googleログイン
            </a>
          </div>
          <div class="btn-box">
            <a @click="link_commit('/todo')">
              Project ToDos
            </a>
          </div>
          <div class="btn-box">
            <a @click="link_commit('/photo')">
              Project Update
            </a>
          </div>
          <!-- <div class="btn-sign-in">
            <a @click="link_commit('/login')">
              Sing in for h-Works
            </a>
            <div class="menu_underline" />
          </div> -->
          <!-- <section>
            <div v-if="isWaiting">
              <p>読み込み中</p>
            </div>
            <div v-else>
              <div v-if="!isLogin">
                <h3>Google Login </h3>
                <button style="color:black" @click="googleLogin">
                  Googleでログイン
                </button>
              </div>
              <div v-else>
                <h3>Google Login</h3>
                <div>{{ userName }}</div>
                <div>{{ userEmail }}</div>
                <div>{{ userPhotoUrl }}</div>
                <img :src="userPhotoUrl" alt="user image" class="image-mask">
                <p>{{ userName }}でログイン中</p>
                <button style="color:black" @click="logOut">
                  ログアウト
                </button>
              </div>
            </div>
          </section> -->
        </div>
      </div>
    </div>
    <!-- </transition> -->
    <!-- <transition name="mainCon" appear> -->
    <div class="content-header-second con-wraper">
      <p>Nuxt Starter Template</p>
      <p>nuxt create </p>
    </div>
    <!-- </transition> -->
    <transition name="mainCon" appear>
      <div class="content-main-tec" :style="{ 'background-image': 'url(' + dockerBgRs1 + ')' }">
        <div class="content con-wraper con-mein-top">
          <section class="con-main-sec">
            <h2>プロジェクト作成</h2>
            <div class="con-main-line" />
            <div class="con-main-list">
              <p>GitHubからCloneしてローカルにプロジェクトを作成します。Nuxt.configの初期設定を行い、アプリ開発の準備を行います。</p>
            </div>
            <!-- <div class="page-link"> -->
            <nuxt-link to="/about" class="page-link">
              詳細ページ
            </nuxt-link>
            <!-- </div> -->
          </section>
          <section class="con-main-sec">
            <h2>自動ディプロイ</h2>
            <div class="con-main-line" />
            <div class="con-main-list">
              <p>CircleCIを使ってホストへ自動ディプロイする設定を作ります。</p>
            </div>
            <nuxt-link to="/about" class="page-link">
              詳細ページ
            </nuxt-link>
          </section>
          <section class="con-main-sec">
            <h2>ホスティング</h2>
            <div class="con-main-line" />
            <div class="con-main-list">
              <p>
                Firebaseのプロジェクトを作成し、ホスティングする準備をします。また、Realtime Database,
                Storage,Authenticationなども設定します。
              </p>
            </div>
            <nuxt-link to="/about" class="page-link">
              詳細ページ
            </nuxt-link>
          </section>
          <section class="con-main-sec">
            <h2>アプリ開発</h2>
            <div class="con-main-line" />
            <div class="con-main-list">
              <p>開発作業を行います。</p>
            </div>
            <nuxt-link to="/about" class="page-link">
              詳細ページ
            </nuxt-link>
          </section>
        </div>
      </div>
    </transition>

    <transition name="mainCon" appear>
      <div class="content-main-implement">
        <div class="content-main-title">
          <h1>App Develop</h1>
          <p>In Precess</p>
        </div>
        <div class="content con-wraper con-mein-project">
          <section class="con-main-imp">
            <h1>To Do</h1>
            <div class="con-main-line" />
            <p>Firebaseを使う</p>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2/issues/20" class="gitHub-link">NuxtのStoreからFirebaseを使う</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2/issues/21" class="gitHub-link">firebase Daabaseを使う</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2/issues/22" class="gitHub-link">firebase strageを使う</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2/issues/23" class="gitHub-link">firebaseで認証する</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2/issues/24" class="gitHub-link">Firebaseでホスティングする。</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2/issues/25" class="gitHub-link">Circle CI でGitHubにpushしたら自動でディプロイする。</a>
            </div>
          </section>
          <section class="con-main-imp">
            <h1>In Progress</h1>
            <div class="con-main-line" />
            <p>環境変数</p>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2/issues/19" class="gitHub-link">dotenv を使って環境変数を設定し、Firebaseのconfigで使う。</a>
            </div>
          </section>
          <section class="con-main-imp">
            <h1>Done</h1>
            <div class="con-main-line" />
            <p>開発準備</p>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/26" class="gitHub-link">reate-nuxt-app</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/21" class="gitHub-link">GitHubリポジトリをcloneしてローカルプロジェクトを作る</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/22" class="gitHub-link">GitHub リポジトリの作成</a>
            </div>
            <p>初期設定</p>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/32" class="gitHub-link">eslintrcのフォーマットエラーの解消</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/31" class="gitHub-link">eslintrc.jsの設定をする。</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/24" class="gitHub-link">SASS変数を使う設定</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/20" class="gitHub-link">sass を使う設定</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/25" class="gitHub-link">autoprefixer の設定</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/30" class="gitHub-link">markdown記入方法を使用する設定</a>
            </div>
            <p>SEO</p>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/28" class="gitHub-link">Google Serch Colsoleを使う
              </a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/27" class="gitHub-link">Google Analyticsnを使う</a>
            </div>
            <div class="con-main-impList">
              <a href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/issues/29" class="gitHub-link">サイトマップ自動生成</a>
            </div>
          </section>
        </div>
      </div>
    </transition>

    <!-- <div class="content-header">
      <logo />
      <h1 class="title">
        h-works
      </h1>
      <h2 class="subtitle">
        Nuxt.js Universal SSR Firebase
      </h2>
      <h2 class="subtitle">
        GitHub + firebase + Circle CI
      </h2>
      <div>
        <div>
          test4  <pre>config.yml project nuxt-app-6f771</pre>
        </div>
        <div>
          test5  <pre>config.yml build  generate</pre>
        </div>
        <div>
          test6  <pre>pakage.json  dotenv  install --save--dev</pre>
        </div>
        <div>
          test7  <pre>firebaserc default</pre>
        </div>
        <div>
          test13  <pre>page not found error  --project "nuxt-app-6f771"</pre>
        </div>
        <div>
          test20  <pre>.env gitignore Exclude</pre>
        </div>
        <div>
          test21  <pre>--project=$FIREBASE_PROJECT_ID</pre>
        </div>
        <div>
          test25  <pre>.env gitignore Include generate error</pre>
        </div>
        <div>
          test27  <pre>config.yml  run: echo ${ENV} > ~/.env  </pre>
        </div>
        <div>
          test28  <pre>config.yml  echo "FIREBASE_API_KEY=$FIREBASE_API_KEY" > .env  </pre>
        </div>
        <div>
          test29  <pre>git push no username ENTER TEST</pre>
        </div>
        <div>
          test32  <pre>git config --global credential.helper wincred</pre>
        </div>
        <div>
          test34  <pre>firebase config FIREBASE_MESSAGING_SENDER_ID set</pre>
        </div>
      </div>
    </div> -->

    <!-- <div class="content">
      <section>
        <a class="github sec-link" href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2">
          <h3>GitHub </h3>
          <div class="word-wrap">hiramatsuYoshiaki/nuxt-univ-firebase-app2</div>
          <div class="word-wrap">https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2</div>
        </a>
      </section>
      <section>
        <h3>Firebase</h3>
        <a class="netlify sec-link" href="https://nuxt-app-6f771.firebaseapp.com/">
          <div class="word-wrap">
            Hosting https://nuxt-app-6f771.firebaseapp.com/
          </div>
        </a>
        <br>
        <div class="word-wrap">
          Project-name:nuxt-app-6f771
        </div>

        <div class="word-wrap">
          Authentication google login
        </div>
        <div class="word-wrap">
          Database imagedatas
        </div>
        <div class="word-wrap">
          strage  gs://nuxt-app-6f771.appspot.com images
        </div>
      </section>
    </div> -->

    <!-- <div class="content">
      <section>
        <h2>1.Store Test </h2><br>
        <div>
          <h3>Counter</h3>

          <button style="color:black" @click="increment(100)">
            counter : {{ cnt }}
          </button>
        </div><br>
        <div>
          <h3>Todo List</h3>
          <ul>
            <li v-for="(list, index) in lists" :key="index">
              <input
                :checked="list.done"
                type="checkbox"
                @change="toggle(list)"
              >
              <span :class="{ done: list.done }">
                {{ list.text }} : {{ list.done }}
              </span>
              <button style="color:black" @click="remove(list)">
                delete
              </button>
            </li>
            <li>
              <input
                style="color:black"
                placeholder="What needs to be done?"
                @keyup.enter="addTodo"
              >
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>2.Store Module Test </h2><br>
        <div>
          <h2>Articles</h2>
          <ul>
            <li v-for="(article, index) in articles" :key="index">
              <span>{{ article }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Comments <small>(nested under articles)</small></h2>
          <ul>
            <li v-for="(comment, index) in comments" :key="index">
              <span>{{ comment }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="content">
      <section>
        <h3>3.fetch メソッド axius </h3>
        <p>Stars: {{ $store.state.stars }}</p>
      </section>
      <section>
        <h2>4.Json Requre</h2>
        <p><pre>App Datas: {{ jsonAll }}</pre></p>
      </section>
    </div> -->
    <div class="content">
      <section>
        <h2>5.firebase</h2>
        <h3><pre>items: {{ items }}</pre></h3>
        <input
          v-model="todoText"
          type="text"
          style="color:black"
          @keyup.enter="addTodoFirebase"
        >
        <li v-for="item in items" :key="item.key">
          {{ item.title }}
          <button
            style="color: black"
            @click="removeTodoFirebase(item['.key'])"
          >
            del
          </button>
        </li>
      </section>

      <section>
        <h2>6.firebase storage image</h2>
        <h3><pre>items: {{ meetups }}</pre></h3>
        <div v-for="meetup in meetups" :key="meetup.key">
          <img :src="meetup.imageUrl" width="auto" height="50px">
          <button
            style="color: black"
            @click="removeTodoFirebase(item['.key'])"
          >
            del
          </button>
          {{ meetup.title }}
        </div>
      </section>
    </div>
    <div class="content">
      <section>
        <h2>7.select image file upload</h2>
        <form @submit.prevent="onCreateMeetup">
          <div v-if="!image">
            <h3>Select an image</h3>
            <input type="file" accept="image/*" @change="onFileChange">
          </div>
          <div v-else>
            <button style="color:black" @click="removeImage">
              Remove
            </button>
            <img :src="imageUrl" width="auto" height="300px" style="display:block">
            <input v-model="createTitle" placeholder="Title" style="color:black" required>
            <p>Title : {{ createTitle }}</p>
            <button type="submit" style="color:black">
              Create Meetup
            </button>
          </div>
        </form>
      </section>

      <section>
        <!-- <div>{{ uid }}</div> -->

        <div v-if="isWaiting">
          <p>読み込み中</p>
        </div>
        <div v-else>
          <div v-if="!isLogin">
            <h3>Google Login </h3>
            <button style="color:black" @click="googleLogin">
              Googleでログイン
            </button>
          </div>
          <div v-else>
            <!-- <p>{{ user.email }}でログイン中</p> -->
            <h3>Google Login</h3>
            <div>{{ userName }}</div>
            <div>{{ userEmail }}</div>
            <div>{{ userPhotoUrl }}</div>
            <p>{{ user.Name }}でログイン中</p>
            <button style="color:black" @click="logOut">
              ログアウト
            </button>
          </div>
        </div>
      </section>

      <!-- <section>
        <h3>8.Google Auth mail asyncData</h3>
        <div v-if="isWaiting">
          <p>読み込み中</p>
        </div>
        <div v-else>
          <div v-if="!isLogin">
            <div>
              <p>
                <input
                  v-model="email"
                  style="color:black"
                  type="text"
                  placeholder="email"
                >
              </p>
              <p>
                <input
                  v-model="password"
                  style="color:black"
                  type="password"
                  placeholder="password"
                >
              </p>
              <p>
                <input
                  id="checkbox"
                  v-model="register"
                  style="color:black"
                  type="checkbox"
                >
                <label for="checkbox">新規登録</label>
              </p>
              <button style="color:black" @click="passwordLogin">
                {{ register ? '新規登録' : 'ログイン' }}
              </button>
              <p>{{ errorMessage }}</p>
            </div>
          </div>
          <div v-else>
            <p>{{ user.email }}でログイン中</p>
            <button style="color:black" @click="logOut">
              ログアウト
            </button>
          </div>
        </div>
      </section> -->
    </div>

    <transition name="mainCon" appear>
      <div class="content-footer">
        <ContentFooter />
      </div>
    </transition>

    <transition appear name="transitionScreen">
      <TransitionScreen v-if="page === '/'" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Logo from '~/components/Logo.vue'
import TransitionScreen from '~/components/transition/TransitionScreen.vue'
import ContentFooter from '~/components/content/ContentFooter.vue'
import axios from 'axios'
import { ADD_TODO, REMOVE_TODO, INIT_TODO, INIT_MEETUP, CREATE_IMGDATAS } from '~/store/actionTypes'
import firebase from '@/plugins/firebase'

export default {
  layout: 'topPage',
  // transition: 'content-slide',
  // middleware: 'auth',
  components: {
    Logo,
    ContentFooter,
    TransitionScreen
  },
  data() {
    return {
      img: require('~/assets/img/img1578.jpg'),
      dockerBg: require('~/assets/img/docker.svg'),
      dockerBg3: require('~/assets/img/docker3.svg'),
      dockerBgRs1: require('~/assets/img/dockerRevers1.svg'),
      pageTitle: 'Landing Content',
      pageSubTitle: 'Nuxt.js Demo Site',
      pageDiscription: 'Landing',
      pageDiscriptionDetail: 'Vue.jsのフレームワークNuxt.jsを使ったデモサイトです。',
      // todoText: { title: 'todo-xxx', dane: false },
      todoText: '',
      image: false,
      filename: '',
      imageUrl: '',
      createTitle: ''
    }
  },
  asyncData() {
    return {
      // google login
      isWaiting: true,
      isLogin: false,
      user: [],
      // mail login
      register: false,
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'description',
          name: 'landing by Nuxt.js',
          content: 'このページは、Vue.jsフレームワークのNuxt.jsを使って作成したデモサイトです。' }
      ]
    }
  },

  async fetch({ store, params }) {
    // const { data } = await axios.get('~/static/json/posy.json')
    const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    store.commit('setStars', data)
  },
  created() {
    // firebase
    this.$store.dispatch(INIT_TODO)
    this.$store.dispatch(INIT_MEETUP)
  },
  mounted: function () {
    // goolge login, mail login
    this.isWaiting = true
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogin = true
        this.user = user
        console.log('login')
        this.$store.commit('setLogin', true)
        this.$store.commit('setUserEmail', this.user.email)
        this.$store.commit('setUserName', this.user.displayName)
        this.$store.commit('setUserPhotoUrl', this.user.photoURL)
      } else {
        this.isLogin = false
        this.user = []
        console.log('logout')
        this.$store.commit('setLogin', false)
        this.$store.commit('setUserEmail', '')
        this.$store.commit('setUserName', '')
        this.$store.commit('setUserPhotoUrl', '')
      }
      this.isWaiting = false
    })
  },

  computed: {
    isUser() {
      return this.$store.state.isLogin
    },
    userEmail() {
      return this.$store.state.userEmail
    },
    userName() {
      return this.$store.state.userName
    },
    userPhotoUrl() {
      return this.$store.state.PhotoUrl
    },
    // page() {
    //   return this.$store.state.page
    // },
    ...mapState([
      'page'
      // 'counter'
    ]),

    // counter() {
    //   return this.$store.state.inc.counter
    // },
    // ...mapState({
    //   counter: state => state.inc.conuter
    // }),
    // ...mapState('inc', [
    //   'counter'
    // ]),
    ...mapState('inc', {
      cnt: 'counter'
    }),

    // lists() {
    //   return this.$store.state.inc.lists
    // },
    // ...mapState({
    //   lists: state => state.inc.lists
    // }),
    // ...mapState('inc', [
    //   'lists'
    // ]),
    ...mapState('inc', {
      lists: 'lists'
    }),
    ...mapGetters({
      articles: 'articles/get',
      comments: 'articles/comments/get'
    }),

    // jsonAll() {
    //   return this.$store.state.json.data
    // },
    ...mapGetters({
      jsonAll: 'json/getAll'
    }),
    // firebase
    ...mapState(['items']),
    ...mapState(['meetups'])

  },

  methods: {

    // increment() {
    //   this.$store.commit('inc/increment', 100)
    // },
    ...mapMutations('inc', [
      'increment'
    ]),
    // toggle(todo) {
    //   this.$store.commit('inc/toggle', todo)
    // },
    // remove(todo) {
    //   this.$store.commit('inc/remove', todo)
    // },
    ...mapMutations('inc', ['toggle', 'remove']),
    addTodo(e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.commit('inc/add', { text })
      }
      e.target.value = ''
    },
    // firebase
    addTodoFirebase() {
      this.$store.dispatch(ADD_TODO, { title: this.todoText, done: false })
      this.todoText = ''
      console.log('addTodo')
    },
    removeTodoFirebase(key) {
      this.$store.dispatch(REMOVE_TODO, key)
    },
    // google login
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logOut() {
      firebase.auth().signOut()
    },
    // mail login password
    // passwordLogin() {
    //   const email = this.email
    //   const password = this.password
    //   if (this.register) {
    //     this.$store.commit('setLogin', true)
    //     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    //       const errorMessage = error.message
    //       this.errorMessage = errorMessage
    //       this.$store.commit('setLogin', false)
    //     }.bind(this))
    //   } else {
    //     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    //       const errorMessage = error.message
    //       this.errorMessage = errorMessage
    //       this.$store.commit('setLogin', false)
    //     }.bind(this))
    //   }
    // },
    // logOut() {
    //   firebase.auth().signOut()
    //   this.$store.commit('setLogin', false)
    // },
    // file upload
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      this.filename = files[0].name
      if (this.filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
        // this.image = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      // this.createImage(files[0])
    },
    // createImage(file) {
    //   const reader = new FileReader()
    //   const vm = this

    //   reader.onload = (e) => {
    //     vm.image = e.target.result
    //   }
    //   reader.readAsDataURL(file)
    // },
    removeImage(e) {
      this.image = ''
    },

    onCreateMeetup() {
      console.log('onCreateMeetup title: ' + this.createTitle)
      console.log('onCreateMeetup title: ' + this.filename)
      console.log(this.image)
      const createDatas = {
        title: this.createTitle,
        filename: this.filename,
        done: false,
        image: this.image
      }
      console.log(createDatas)
      this.$store.dispatch(CREATE_IMGDATAS, createDatas)

      // if (text.trim()) {
      //   this.$store.commit('inc/add', { text })
      // }
      // e.target.value = ''
      // this.$store
      //   .dispatch('uploadImage', {
      //     name: this.filename,
      //     file: this.image
      //   })
      //   .then((url) => {
      //     // アップロード完了処理 (ローカルメンバに保存したり)
      //     // this.fileName = fileName
      //     // this.imageUrl = url
      //     console.log('ok')
      //   })
    },
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
//content base-----------------------
.container{
  margin-top: $header-height;
  width: 100vw;
  @extend %center;
  flex-direction: column;
  margin:0;
  padding: 0;
}
.content{
  width: 100%;
  display:flex;
  flex-direction: column;
  @media(min-width: 992px){
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
// wraper-----------------------------
.con-wraper{
  padding: 8rem 2rem;
  @media(min-width: 992px){
    padding: 15rem 5rem;
  }
}
//header-----------------------------
.content-header{
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.con-hed-logo{
  @extend %center;
  width:100%;
  @media(min-width: 992px){
    width:40%;
  }
}
.con-hed-title{
  display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  @media(min-width: 992px){
       justify-content: flex-start;
    align-items: flex-start;
  }
  h1{
    font-size: 3.0rem;
    font-weight: 700;
    line-height: 3.5rem;
  }
  h2{
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
  }
  .sign-in-text{
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.1rem;
  }
  @media(min-width: 992px){
    width:70%;
    h1{
      font-size: 8.0rem;
      font-weight: 700;
      line-height: 8.5rem;
    }
    h2{
      font-size: 4.0rem;
      font-weight: 400;
      line-height: 4.5rem;
    }
    .sign-in-text{
    font-size: 2.0rem;
      font-weight: 500;
      line-height: 2.5rem;
  }
  }
  .btn-box{
    width: 30rem;
    margin-top: 2rem;
    padding:1rem 3rem;
    border: 2px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    @media(min-width: 992px){
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .image-mask{
    border-radius: 50%;
    width:5rem;
    height:5rem;
  }
}

// content-header-second-------------------------
.content-header-second{
  @extend %center;
  flex-direction: column;
  width: 100%;
}
// content-main-title----------------------------
.content-main-tec{
  width: 100vw;
  height: 100%;
  @media(min-width: 992px){
    height: 100vh;
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.con-mein-top{
  justify-content:space-between;
  align-items: stretch;
}
.con-main-sec{
  position: relative;
  width:100%;
  padding: 2rem 2rem 6rem 2rem;
  margin-bottom: 2rem;
  @media(min-width: 992px){
    width:20%;
  }
  background-color: #fff;
  color: #212121;
  border: 2px solid rgba(0,0,0,.3);
  border-radius: 5px;

}
.con-main-sec{
  h1{
    font-size: 3.0rem;
    font-weight: 700;
    line-height: 3.5rem;
  }
  h2{
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
  }
  p{
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4rem;
  }
  @media(min-width: 992px){
    h1{
      font-size: 6.0rem;
      font-weight: 700;
      line-height: 6.5rem;
    }
    h2{
      font-size: 4.0rem;
      font-weight: 400;
      line-height: 4.5rem;
    }
    p{
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
    }
  }
}
.con-main-line{
  width: 100%;
  height: 1px;
  background-color: #212121;
  margin: 2rem 0;
}
.page-link{
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  color: rgb(6, 140, 250);
  font-weight: 700;
  width: 100%;
  cursor: pointer;
  display:block;
  margin: 2rem;
}
// main inpliment------------------------------
.content-main-implement{
  width: 100vw;
  background-color: rgb(230,230,230);
  color: #212121;
  border-top: rega(0,0,0,.2);
}
.content-main-title{
  @extend %center;
  flex-direction: column;
  width: 100%;
  padding: 5rem 0 0 0 ;
}
.con-mein-project{
  justify-content:space-between;
}
.con-main-imp{
  width:100%;
  padding: 2rem;
  background-color: rgb(170, 170, 170);
  @media(min-width: 992px){
    width:30%;
  }
  border-radius: 5px;
  margin-bottom: 2rem;
}
.con-main-impList{
  padding: 2rem;
  background-color: rgb(230,230,230);
  margin: 2rem 0;
  border-radius: 5px;
}
.gitHub-link{
  // position: absolute;
  // bottom: 0;
  // right: 0;
  text-align: left;
  color: #212121;
  font-weight: 700;
  width: 100%;
  cursor: pointer;
  display:block;
  // margin: 2rem;
}

.links{
  @extend %center;
}
.links a{
  display: inline-block;
  margin: 0 2rem;
  cursor: pointer;
}
.word-wrap{
  word-wrap: break-word;
}
.title{
  margin-top:2rem;
}
.content-footer{
  width: 100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -5rem;
}

.done {
  text-decoration: line-through;
}

</style>
