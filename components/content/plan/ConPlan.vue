<template>
  <div class="conPlan">
    <h1>Login</h1>
    <!-- <p>{{ user.displayName }}</p> -->
    <!-- <p>{{ user.email }}</p> -->
    <!-- <p>{{ user.photoURL }}</p> -->
    <!-- <p>{{ user.emailVerified }}</p> -->
    <!-- <p>{{ user.uid }}</p> -->
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
    <h1>Todo</h1>
    <p>
      プロジェクトの実装計画
    </p>
    <div>{{ isWaiting }}</div>
    <!-- <div class="flex-container select-mode">
      <div class="content">
        <section>
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
        </section>
      </div>
    </div> -->
  </div>
</template>
<script>
// import { mapState, mapGetters, mapMutations } from 'vuex'
import { mapState } from 'vuex'
// import { ADD_TODO, REMOVE_TODO, INIT_TODO, INIT_MEETUP, CREATE_IMGDATAS } from '~/store/actionTypes'
import { INIT_TODO } from '~/store/actionTypes'
import firebase from '@/plugins/firebase'
export default {
//   props: {
//     pageTitle: {
//       type: String,
//       default: 'a'
//     },
//   }
//     data() {
//     return {
//       active: true
//     }
//   },

  computed: {
    isUser() {
      return this.$store.state.isLogin
    },
    ...mapState([
      'page'
      // 'counter'
    ]),
    ...mapState(['items'])
  },
  data() {
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

  created() {
    // firebase
    this.$store.dispatch(INIT_TODO)
    // this.$store.dispatch(INIT_MEETUP)
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
      } else {
        this.isLogin = false
        this.user = []
        console.log('logout')
        this.$store.commit('setLogin', false)
      }
      this.isWaiting = false
    })
  },
  methods: {
    link_commit(linkPath) {
      this.active = true
      this.$store.commit('pagePathSet', linkPath)
      setTimeout(() => {
        this.$router.push({ path: linkPath })
      }, 500)
    },
    passwordLogin() {
      const email = this.email
      const password = this.password
      if (this.register) {
        this.$store.commit('setLogin', true)
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
          const errorMessage = error.message
          this.errorMessage = errorMessage
          this.$store.commit('setLogin', false)
        }.bind(this))
      } else {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
          const errorMessage = error.message
          this.errorMessage = errorMessage
          this.$store.commit('setLogin', false)
        }.bind(this))
      }
    },
    logOut() {
      firebase.auth().signOut()
      this.$store.commit('setLogin', false)
    }

  }
}
</script>
<style scoped lang="scss">
.conPlan{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 2rem;
  @media (min-width: 768px) {
      padding: 8rem 8rem;
  };
  border: 1px solid  rgba(0,0,0,.2);
}
.flex-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
      flex-direction: row;
  };
}
.select-mode{
    margin-top:2rem;
}

</style>
