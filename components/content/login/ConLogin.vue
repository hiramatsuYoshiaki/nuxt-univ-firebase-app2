<template>
  <div class="conContent">
    <div class="flex-container">
      <div class="one-col">
        <div class="col-block left-block">
          <div class="section-block left-section">
            <div class="contact-title">
              <div v-if="isWaiting">
                loading....
              </div>
              <div v-else>
                <div v-if="isUser">
                  <div class="userWrap">
                    <img :src="userPhotoUrl" alt="user image" class="image-mask">
                    <h1>ようこそ、{{ userName }} さん</h1>
                    <div class="btn-box" @click="logOut">
                      Logout
                    </div>
                    <div class="btn-box" @click="link_commit('/')">
                      close
                    </div>
                  </div>
                </div>
                <div v-else>
                  <h1>Google アカウントで</h1>
                  <h1>ログインしてください。</h1>
                  <div class="btn-box" @click="googleLogin">
                    Login
                  </div>
                  <div class="btn-box" @click="link_commit('/')">
                    close
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="one-col">
        <div class="col-block right-block">
          <div class="section-block left-section">
            <div v-if="isUser">
              <div class="btn-box" @click="logOut">
                Logout with Google Account
              </div>
            </div>
            <div v-else>
              <div class="btn-box" @click="googleLogin">
                Login with Google Account
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex'
import { mapState } from 'vuex'
import firebase from '@/plugins/firebase'
// import { ADD_TODO, REMOVE_TODO, INIT_TODO, INIT_MEETUP, CREATE_IMGDATAS } from '~/store/actionTypes'
export default {
//   props: {
//     msg: String
//   },
  data() {
    return {
      isWaiting: false
    }
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
    ...mapState([
      'page'
    ])
  },
  mounted: function () {
    this.isWaiting = true
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setLogin', true)
        this.$store.commit('setUid', user.uid)
        this.$store.commit('setUserEmail', user.email)
        this.$store.commit('setUserName', user.displayName)
        this.$store.commit('setUserPhotoUrl', user.photoURL)
        this.isWaiting = false
      } else {
        this.$store.commit('setLogin', false)
        this.$store.commit('setUid', '')
        this.$store.commit('setUserEmail', '')
        this.$store.commit('setUserName', '')
        this.$store.commit('setUserPhotoUrl', '')
        this.isWaiting = false
      }
    })
  },
  methods: {
    // routing transition
    link_commit(linkPath) {
      this.$store.commit('pagePathSet', linkPath)
      setTimeout(() => {
        this.$router.push({ path: linkPath })
      }, 500)
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //   var token = result.credential.accessToken;
        // The signed-in user info.
        //   var user = result.user;
        // ...
        console.log('google login')
      }).catch(function (error) {
        // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        // The email of the user's account used.
        //   var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        //   var credential = error.credential;
        // ...
        console.log('google login error: ' + error)
      })
    },
    // googleLogin() {
    //   const provider = new firebase.auth.GoogleAuthProvider()
    //   firebase.auth().signInWithRedirect(provider)
    // },

    logOut() {
      firebase.auth().signOut()
        .then(function (result) {
          console.log('google login')
        }).catch(function (error) {
          console.log('google login error: ' + error)
        })
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
.conContent{
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem;
  @media (min-width: 768px) {
      padding: 8rem 8rem;
  };
}
.flex-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 992px) {
      flex-direction: row;
  };

}
.one-col{
    width: 100%;
    height: 100%;
    padding: 2rem 2rem;
    @media (min-width: 992px) {
        padding: 8rem;
    };
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: $footer-color-color;
}
.two-col{
    width: 100%;
    height: 100%;
    padding: 2rem 2rem;
    @media (min-width: 992px) {
        width: 50%;
        padding: 8rem;
    };
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: $footer-color-color;
}
.userWrap{
     @extend %center;
    flex-direction: column;
}
h1{
    font-size: 2rem;
    @media (min-width: 992px) {
    font-size: 4rem;
    };
}
p{
    font-size: 1.6rem;
    @media (min-width: 992px) {
    font-size: 2rem;
    };
}
.image-mask{
    border-radius: 50%;
    width:5rem;
    height:5rem;
    margin-bottom: 2rem;
    @media (min-width: 992px) {
        width:20rem;
        height:20rem;
        margin-bottom: 5rem;
    };
}
.btn-box{
width: 20rem;
margin-top: 2rem;
padding:1rem 3rem;
border: 2px solid #fff;
border-radius: 5px;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;
@media(min-width: 992px){
    width: 30rem;
}
}

</style>
