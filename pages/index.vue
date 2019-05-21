<template>
  <div class="container">
    <div class="content-header">
      <logo />
      <h1 class="title">
        h-works Ci test6  generate  dotenv
      </h1>
      <h2 class="subtitle">
        Nuxt.js Universal SSR Firebase
      </h2>
      <h2 class="subtitle">
        GitHub + firebase + Circle CI
      </h2>
      <div >
        test4  config.yml --project nuxt-app-6f771
      </div>
      <div >
        test5  config.yml build --> generate  
      </div>
      <div >
        test6  pakage.json  dotenv  install --save--dev 
      </div>
      <div >
        test7  firebaserc default
      </div>
      <div >
        test13  page not found error --> --project "nuxt-app-6f771"
      </div>
      <div >
        test20  .env gitignore Exclude
      </div>
      <div >
        test21  --project=$FIREBASE_PROJECT_ID
      </div>
      <div >
        test25  config.yml - <pre>run: echo ${ENV} > ~/.env  </pre>
      </div>
    </div>
    <div class="content">
      <section>
        <a class="github sec-link" href="https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2">
          <h3>GitHub </h3>
          <div class="word-wrap">hiramatsuYoshiaki/nuxt-univ-firebase-app2</div>
          <div class="word-wrap">https://github.com/hiramatsuYoshiaki/nuxt-univ-firebase-app2</div>
        </a>
        <!-- <a class="github sec-link" href="https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/projects/1">
          <h3>GitHub Project</h3>
          <div class="word-wrap">https://github.com/hiramatsuYoshiaki/nuxt-univ-app1/projects/1</div>
        </a>
        <a class="github sec-link" href="https://hiramatsuyoshiaki.github.io/nuxt-univ-app1/">
          <h3>GitHub Pages</h3>
          <div class="word-wrap">https://hiramatsuyoshiaki.github.io/nuxt-univ-app1/</div>
        </a> -->
      </section>
      <!-- <section>
        <a class="netlify sec-link" href="https://nuxt-univ-app1.netlify.com/">
          <h3>Netlify</h3>
          <div class="word-wrap">Yoshiaki Hiramatsu team</div>
          <div class="word-wrap">nuxt-univ-app1</div>
          <div class="word-wrap">https://nuxt-univ-app1.netlify.com/</div>
        </a>
      </section> -->
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

        <!-- <div class="word-wrap">https://nuxt-univ-app1.netlify.com/</div> -->
      </section>
    </div>
    <div class="content">
      <section>
        <button style="color:black" @click="increment(100)">
          <!-- counter : {{ counter }} -->
          counter : {{ cnt }}
        </button>
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
      </section>
      <section>
        <h2>Articles</h2>
        <ul>
          <li v-for="(article, index) in articles" :key="index">
            <span>{{ article }}</span>
          </li>
        </ul>
        <h2>Comments <small>(nested under articles)</small></h2>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">
            <span>{{ comment }}</span>
          </li>
        </ul>
      </section>
    </div>
    <div class="content">
      <section>
        <h2>fetch メソッド</h2>
        <h3>Stars: {{ $store.state.stars }}</h3>
      </section>
      <section>
        <h2>asyncData</h2>
        <h3><pre>App Datas: {{ jsonAll }}</pre></h3>
      </section>
    </div>
    <div class="content">
      <section>
        <h2>firebase</h2>
        <h3><pre>items: {{ items }}</pre></h3>
        <input v-model="todoText" type="text" style="color:black" @keyup.enter="addTodoFirebase">
        <li v-for="item in items" :key="item.key">
          {{ item.title }}
          <button style="color: black" @click="removeTodoFirebase(item['.key'])">
            del
          </button>
        </li>
      </section>

      <section>
        <h2>firebase storage image</h2>
        <h3><pre>items: {{ meetups }}</pre></h3>
        <div v-for="meetup in meetups" :key="meetup.key">
          <img :src="meetup.imageUrl" width="auto" height="50px">
          <button style="color: black" @click="removeTodoFirebase(item['.key'])">
            del
          </button>
          {{ meetup.title }}
        </div>
      </section>
    </div>
    <div class="content">
      <section>
        <h2>select image file upload</h2>
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

      <!-- <section>
        <h3>Google Login</h3>
        <div v-if="isWaiting">
          <p>読み込み中</p>
        </div>
        <div v-else>
          <div v-if="!isLogin">
            <button style="color:black" @click="googleLogin">
              Googleでログイン
            </button>
          </div>
          <div v-else>
            <p>{{ user.email }}でログイン中</p>
            <button style="color:black" @click="logOut">
              ログアウト
            </button>
          </div>
        </div>
      </section> -->
      <section>
        <h3>Google Auth mail</h3>
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
      </section>
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
  components: {
    Logo,
    ContentFooter,
    TransitionScreen
  },
  data() {
    return {
      img: require('~/assets/img/img1578.jpg'),
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
  async fetch({ store, params }) {
    // const { data } = await axios.get('~/static/json/posy.json')
    const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    store.commit('setStars', data)
  },
  mounted: function () {
    // goolge login, mail login
    firebase.auth().onAuthStateChanged((user) => {
      this.isWaiting = false
      if (user) {
        this.isLogin = true
        this.user = user
        // console.log('login')
      } else {
        this.isLogin = false
        this.user = []
        // console.log('logout')
      }
    })
  },
  // created() {
  // this.$store.dispatch('setItemsRef', { ref: db.ref('meetups') })
  // },
  created() {
    // firebase
    this.$store.dispatch(INIT_TODO)
    this.$store.dispatch(INIT_MEETUP)
  },

  computed: {
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
    },
    removeTodoFirebase(key) {
      this.$store.dispatch(REMOVE_TODO, key)
    },
    // google login
    // googleLogin() {
    //   const provider = new firebase.auth.GoogleAuthProvider()
    //   firebase.auth().signInWithRedirect(provider)
    // },
    // logOut() {
    //   firebase.auth().signOut()
    // }
    // mail login password
    passwordLogin() {
      const email = this.email
      const password = this.password
      if (this.register) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
          const errorMessage = error.message
          this.errorMessage = errorMessage
        }.bind(this))
      } else {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
          const errorMessage = error.message
          this.errorMessage = errorMessage
        }.bind(this))
      }
    },
    logOut() {
      firebase.auth().signOut()
    },
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
.container{
  margin-top: $header-height;
  width: 100vw;
  padding: 2rem;
  @media (min-width: 992px){
    padding: 5rem;
  }
  @extend %center;
  flex-direction: column;
}
//header-----------------------------
.content-header{
  @extend %center;
  flex-direction: column;
}
//content -----------------------
.content{
  margin-top:2rem;
  display:flex;
  flex-direction: column;
  width: 100%;
  @media(min-width: 992px){
    width: 80%;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
  }
}
section{
  width: 100%;
  margin-top:2rem;
  padding: 2rem;
  @media(min-width: 992px){
    width: 50%;
    .github{
      text-align: right;
      margin-bottom: 2rem;
      display: block;
    }
    .netlify{
       margin-bottom: 2rem;
       display: block;
    }
  }

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
