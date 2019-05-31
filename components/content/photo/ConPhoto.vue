<template>
  <div class="conContent">
    <div class="flex-container">
      <div class="one-col">
        Project To Do
      </div>
    </div>
    <div class="flex-container">
      <div class="two-col">
        <select v-model="selectUser" style="color:black">
          <option disabled value="">
            Please select one
          </option>
          <option>Demo User</option>
          <option>Login User</option>
        </select>
        <!-- <span>Selected: {{ selectUser }}</span> -->
      </div>
      <div class="two-col">
        <select v-model="selectCategory" style="color:black">
          <option disabled value="">
            Please select one
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <!-- <span>Selected: {{ selectCategory }}</span> -->
      </div>
    </div>
    <div class="flex-container">
      <div class="three-col">
        <div>Todo</div>
        <div class="list-section">
          <div class="flex-list">
            <div class="btn-col">
              btn
            </div>
            <div class="list-title-col">
              title
            </div>
          </div>
          <div class="flex-list">
            <div class="btn-col">
              btn
            </div>
            <div class="list-title-col">
              title
            </div>
          </div>
        </div>
      </div>
      <div class="three-col">
        <div>In Progress</div>
        <div>list</div>
      </div>
      <div class="three-col">
        <div>Done</div>
        <div>list</div>
      </div>
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
        this.$store.commit('setUserEmail', user.email)
        this.$store.commit('setUserName', user.displayName)
        this.$store.commit('setUserPhotoUrl', user.photoURL)
        this.isWaiting = false
      } else {
        this.$store.commit('setLogin', false)
        this.$store.commit('setUserEmail', '')
        this.$store.commit('setUserName', '')
        this.$store.commit('setUserPhotoUrl', '')
        this.isWaiting = false
      }
    })
  },
  methods: {
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
  },
  // routing transition
  link_commit(linkPath) {
    this.active = true
    this.$store.commit('pagePathSet', linkPath)
    setTimeout(() => {
      this.$router.push({ path: linkPath })
    }, 500)
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
  padding: 2rem 2rem;
  @media (min-width: 768px) {
      padding: 8rem 8rem;
  };
  background-color: $footer-color-color;
  border: 2px solid red;
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
    padding: 2rem 2rem;
    @media (min-width: 992px) {
        padding: 2rem;
    };
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid green;
}
.two-col{
    width: 100%;
    padding: 2rem 2rem;
    @media (min-width: 992px) {
        width: 50%;
        padding: 2rem;
    };
    display:flex;
    justify-content: center;
    align-items: center;
    border: 2px solid green;
}
.three-col{
    width: 100%;
    @media (min-width: 992px) {
        width: 33.3333%;
        padding: 2rem;
    };
    border: 2px solid green;
    padding: 2rem 2rem;
}
.flex-list{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.list-title-col{
    width: 90%;
    @media (min-width: 992px) {
        width: 90%;
        padding: 2rem;
    };
    border: 2px solid green;
    padding: 2rem 2rem;
}
.btn-col{
    width: 10%;
    @media (min-width: 992px) {
        width: 10%;
        padding: 2rem;
    };
    border: 2px solid green;
    padding: 2rem 2rem;
}
.list-section{

}
.contact-title{
//     width: 100%;
//     height: 100%;
border: 5px border orange;
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
