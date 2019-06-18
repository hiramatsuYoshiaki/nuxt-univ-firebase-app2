<template>
  <div class="conContent">
    <div class="flex-container">
      <div class="one-col">
        <h3>ToDo  </h3>
        <p>Firebase CRUD with Store</p>
        <!-- <h3>{{ uid }} </h3> -->
        <!-- <pre>{{ alls }}</pre> -->
      </div>
    </div>
    <div class="flex-container">
      <div class="one-col">
        <div v-if="isUser">
          <div class="user-image-wrap">
            <h3>{{ userName }} </h3>
            <img
              :src="userPhotoUrl"
              alt="user image"
              class="image-mask"
            >
          </div>

          <!-- <h3>{{ userEmail }} </h3>
          <h3>{{ uid }} </h3> -->
        </div>
        <div v-else>
          <!-- <div class="btn-box">
            <a @click="link_commit('/login')">
              Googleログイン
            </a>
          </div> -->
          <div class="btn-box" @click="googleLogin">
            Login with Google Account
          </div>
        </div>
      </div>
    </div>
    <div class="flex-container">
      <div v-if="isUser" class="one-col">
        <!-- <div> {{ tasks }}</div> -->
        <!-- <div> {{ tasks[0] }}</div> -->
        <!-- {{ $store.getters.getUserData(this.uid) }} -->
        <div v-for="(task, index ) in $store.getters.getUserData(this.uid)" :key="index">
          <!-- <div v-if="task.userEmail === userEmail" /> -->
          <!-- <div @click="setSelectUser(task.userEmail, task.task)"> -->
          {{ task.title }}
          <!-- </div> -->
        </div>
        <h3>task:{{ this.setTask.title }}</h3>
        <h3>index:{{ this.setTask.index }}</h3>
        <h3>key:{{ this.setTask.key }}</h3>
        <p>create task(category)</p>
        <input
          v-model="taskText"
          type="text"
          style="color:black"
          placeholder="new task"
          @keyup.enter="addTaskFirebase"
        >
      </div>
    </div>
    <div class="flex-container">
      <div v-if="isUser" class="one-col">
        <li v-for="(task, index) in tasks" :key="task.key">
          <div
            @click="setSellectTask(task['.key'],
                                   index, task.title)"
          >
            {{ task.title }}:{{ index }}
          </div>
          <button
            style="color: black"
            @click="removeTaskFirebase(task['.key'])"
          >
            del
          </button>
          <!-- <button
            style="color: black"
            @click="sellectTaskFirebase(task['.key'])"
          >
            select
          </button> -->
        </li>
      </div>
    </div>
    <div class="flex-container">
      <div v-if="isUser" class="one-col">
        <h3>{{ this.setPost.title }}</h3>
        <p>create todo(post)</p>
        <input
          v-model="todoText"
          type="text"
          style="color:black"
          placeholder="new todo"
          @keyup.enter="addPostFirebase"
        >
      </div>
    </div>
    <div class="flex-container">
      <div v-if="isUser && setTask.key" class="one-col">
        <li v-for="(post, index) in posts" :key="post.key">
          <div
            @click="setSellectPost(post['.key'],
                                   index, post.title)"
          >
            <div>{{ post.title }}: {{ index }}</div>
          </div>
          <button
            style="color: black"
            @click="removePostFirebase(post['.key'])"
          >
            del
          </button>
          <button
            style="color: black"
            @click="updateUpPostFirebase(post['.key'],
             post.stage)"
          >
            stage+
          </button>
          <button
            style="color: black"
            @click="updateDownPostFirebase(post['.key'],
            post.stage)"
          >
            stage-
          </button>
        </li>
      </div>
    </div>
    <div class="flex-container">
      <div v-if="isUser && setTask.key" class="one-col">
        <div>
          <p>Firebase data check posts</p>
          <div> {{ posts }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex'
import { mapState } from 'vuex'
import firebase from '@/plugins/firebase'
import {
  ADD_POST,
  INIT_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_TASK,
  // INIT_TASK,
  REMOVE_TASK,
  INIT_ALL
} from '~/store/actionTypes'
export default {
//   props: {
//     msg: String
//   },
  data() {
    return {
      isWaiting: false,
      todoText: '',
      taskText: '',
      // sellectTask: null,

      setTask: {
        key: null,
        index: 0,
        title: null
      },
      setPost: {
        key: null,
        index: 0,
        title: null
      }

    }
  },
  created() {
  //   this.$store.dispatch(INIT_POST)
    this.$store.dispatch(INIT_ALL)
  },
  computed: {
    isUser() {
      return this.$store.state.isLogin
    },
    userEmail() {
      return this.$store.state.userEmail
    },
    uid() {
      return this.$store.state.uid
    },
    userName() {
      return this.$store.state.userName
    },
    userPhotoUrl() {
      return this.$store.state.PhotoUrl
    },

    ...mapState(['page']),

    // firebase
    ...mapState(['items']),
    ...mapState(['posts']),
    ...mapState(['tasks']),
    ...mapState(['alls'])
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
        // $store.getters['hoge/isHogeExist']
        // this.$store.getters(GET_USERDATA, user.uid)
        // this.$store.dispatch(INIT_TASK, user.uid)
        // async wait
        // this.setTask.index = 0
        // this.setTask.title = this.tasks[0].title
        // const task = this.tasks[0]
        // this.setTask.key = task['.key']
      } else {
        this.$store.commit('setLogin', false)
        this.$store.commit('setUid', null)
        this.$store.commit('setUserEmail', '')
        this.$store.commit('setUserName', '')
        this.$store.commit('setUserPhotoUrl', '')
        this.isWaiting = false
      }
    })
  },
  methods: {
    link_commit(linkPath) {
      this.$store.commit('pagePathSet', linkPath)
      setTimeout(() => {
        this.$router.push({ path: linkPath })
      }, 500)
    },

    // firebase
    // task
    addTaskFirebase() {
      this.$store.dispatch(ADD_TASK,
        { title: this.taskText, uid: this.uid, done: false })
      this.taskText = ''
    },
    removeTaskFirebase(key) {
      const removeValue = {
        key: key,
        uid: this.uid
      }
      this.$store.dispatch(REMOVE_TASK, removeValue)
    },
    setSellectTask(key, index, title) {
      this.setTask.key = key
      this.setTask.index = index
      this.setTask.title = title
      const removeValue = {
        key: key,
        uid: this.uid
      }
      this.$store.dispatch(INIT_POST, removeValue)
    },
    // post
    setSellectPost(key, index, title) {
      this.setPost.key = key
      this.setPost.index = index
      this.setPost.title = title
    },
    addPostFirebase() {
      const postDat = { uid: this.uid,
        title: this.todoText,
        done: false,
        task: this.setTask.key,
        stage: 0
      }
      this.$store.dispatch(ADD_POST, postDat)
      this.todoText = ''
    },
    removePostFirebase(key) {
      const removeValue = {
        key: key,
        uid: this.uid,
        // task: this.sellectTask
        task: this.setTask.key
      }
      this.$store.dispatch(REMOVE_POST, removeValue)
    },
    updateUpPostFirebase(key, stage) {
      let postStage = stage
      if (postStage <= 1) {
        postStage = postStage + 1
        const updateValue = {
          key: key,
          uid: this.uid,
          // task: this.sellectTask,
          task: this.setTask.key,
          stage: postStage
        }
        this.$store.dispatch(UPDATE_POST, updateValue)
      }
    },
    updateDownPostFirebase(key, stage) {
      let postStage = stage
      if (postStage >= 1) {
        postStage = postStage - 1
        const updateValue = {
          key: key,
          uid: this.uid,
          // task: this.sellectTask,
          task: this.setTask.key,
          stage: postStage
        }
        this.$store.dispatch(UPDATE_POST, updateValue)
      }
    },
    // login
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).then(function (result) {
        console.log('google login')
      }).catch(function (error) {
        console.log('google login error: ' + error)
      })
    },
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
.user-image-wrap{
  @extend %center;
  img{
    width: 5rem;
    height: 5rem;
    display: block;
    margin: 0 1rem;
  }
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
.contact-title{
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
</style>
