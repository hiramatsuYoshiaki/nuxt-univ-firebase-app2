<template>
  <div class="authPage">
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
</template>
<script>
import firebase from '@/plugins/firebase'
import { mapState } from 'vuex'
export default {
//   transition: 'a-slide',
//   props: {
//     msg: {
//       type: String,
//       default: ''
//     }
//   },
//   data() {
//     return {
//       active: true
//     }
//   },
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
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    user() {
      return this.$store.state.user
    },
    isWaitingr() {
      return this.$store.state.isWaiting
    },
    ...mapState([
      'page'
    ])
  },
  methods: {
    //     link_commit(linkPath) {
    //       this.active = true
    //       this.$store.commit('pagePathSet', linkPath)
    //       setTimeout(() => {
    //         this.$router.push({ path: linkPath })
    //       }, 500)
    //     }
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
.authPage{
    position: fixed ;
    top: 0;
    left: 0;
    width:100vw;
    height: 100vh;
    z-index: 1000;
    border-bottom: 1px solid rgba(250,250,250,.1);
    background-color: #012121;
    margin:0;
    padding:0;
}
</style>
