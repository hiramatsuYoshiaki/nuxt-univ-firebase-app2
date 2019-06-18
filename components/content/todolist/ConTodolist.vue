<template>
  <div class="conContent">
    <div class="flex-container">
      <div class="one-col">
        <h3>Todo List</h3>
        <p>firebase CRUD with Nuxt Store</p>
        <!-- <div>{{ sp }}</div>
        <div>{{ initTask }}</div>
        <div>{{ initPost }}</div> -->
      </div>
    </div>
    <div class="flex-container">
      <div class="one-col">
        <div v-if="isUser">
          <div class="user-image-wrap">
            <img
              :src="userPhotoUrl"
              alt="user image"
              class="image-mask"
            >
            <div>
              <h3> {{ userName }} </h3>
              <i
                class="material-icons"
                @click="isCgAcount = !isCgAcount"
              >
                expand_more
              </i>
            </div>
            <div v-if="isCgAcount">
              <div class="btn-box" @click="link_commit('/login')">
                別のアカウントにアクセス
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="btn-box" @click="link_commit('/login')">
            <div>Google</div>
            <div>ログイン</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isUser" class="flex-container" />
    <div v-if="isUser" class="flex-container">
      <div v-if="isUser" class="one-col">
        <div>
          <!-- <div>Select Task</div> -->
          <!-- {{ selectTaskIdx }}:{{ selectTask.title }} -->
          <!-- <div>Now Selected</div> -->
          <div v-for="(task, index) in tasks" :key="index">
            <div v-if="index === sellectTaskIdx">
              <div>
                <span class="taskTitle">{{ task.title }}</span>
                <i
                  class="material-icons"
                  @click="isCgTask = !isCgTask"
                >
                  expand_more
                </i>
              </div>
              <div>
                <!-- <div>Todo</div> -->
                <div>
                  Todo
                  <i class="material-icons" @click="isNewPost = !isNewPost"> add </i>

                  <i
                    class="material-icons"
                    @click="postStagingUp(sellectPostIdx)"
                  >
                    call_made
                  </i>
                  <i class="material-icons">
                    call_received
                  </i>
                  <i class="material-icons" @click="postClear(sellectPostIdx)">
                    clear
                  </i>
                </div>
                <!-- <div v-for="(post, index) in posts" :key="index"> -->
                <div v-for="(post, index) in sp" :key="index">
                  <!-- <div v-if="post.key === task['.key']"> -->
                  <div @click="setSelectPost(index, task)">
                    <i
                      v-if="sellectPostIdx !== index"
                      class="material-icons"
                    >
                      radio_button_unchecked
                    </i>
                    <i
                      v-if="sellectPostIdx === index"
                      class="material-icons"
                    >
                      radio_button_checked
                    </i>
                    {{ post.title }}
                    {{ sellectPostIdx }}
                    {{ index }}
                  </div>
                  <!-- </div> -->
                </div>
                <!-- <div class="newPost">
                  <h3>新しいポストを追加する</h3>
                  <i
                    class="material-icons"
                    @click="isNewPost = !isNewPost"
                  >
                    add_circle_outline
                  </i>
                </div> -->
                <div v-if="isNewPost">
                  <p>新しいポストを追加する</p>
                  <input
                    v-model="postText"
                    type="text"
                    style="color:black"
                    placeholder="new post"
                    @keyup.enter="addPostFirebase(task.title, task['.key'])"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="isCgTask" class="taskLists">
          <div v-for="(task, index) in tasks" :key="index">
            <div v-if="task.uid === uid">
              <div>
                <div @click="setSelectTask(index, task)">
                  <i
                    v-if="sellectTaskIdx !== index"
                    class="material-icons"
                  >
                    radio_button_unchecked
                  </i>
                  <i
                    v-if="sellectTaskIdx === index"
                    class="material-icons"
                  >
                    radio_button_checked
                  </i>
                  {{ task.title }}:
                </div>
              </div>
            </div>
          </div>
          <div class="newTask">
            <h3>新しいタスクを追加する</h3>
            <i
              class="material-icons"
              @click="isNewTask = !isNewTask"
            >
              add_circle_outline
            </i>
          </div>
          <div v-if="isNewTask">
            <input
              v-model="taskText"
              type="text"
              style="color:black"
              placeholder="new task"
              @keyup.enter="addTaskFirebase"
            >
          </div>
        </div>
      </div>

      <div v-if="isWaiting">
        <div class="login-loading">
          loading....
        </div>
      </div>
    </div>
    <!-- <div>alls:{{ alls }}</div> -->
    <div>task</div>
    <div>tasks:{{ tasks }}</div>
    <div>post</div>
    <div>posts:{{ posts }}</div>
  </div>
</template>
<script>
import firebase from '@/plugins/firebase'
import { mapState } from 'vuex'
import {
//   ADD_POST,
//   INIT_POST,
//   REMOVE_POST,
//   UPDATE_POST,
//   ADD_USERTASK,
//   ADD_TASK,
//   INIT_TASK,
  //   REMOVE_TASK,
  // INIT_ALL,
  ADD_USERTASK,
  GET_USERDATA,
  ADD_USERPOST
  // GET_SELLECTPOST

} from '~/store/actionTypes'
export default {
  data() {
    return {
      isWaiting: false,
      isCgAcount: false,
      isCgTask: false,
      isNewTask: false,
      isNewPost: false,
      isTaskList: false,
      isSellectTask: false,
      taskText: '',
      postText: '',
      sellectTaskIdx: 0,
      sellectTask: {},
      sellectPostIdx: 0,
      sellectPost: {},
      userSellect: {
        taskIdx: 0,
        postIdx: 0,
        task: '',
        post: '',
        tasklists: [],
        postLists: []
      },
      sp: [],
      initTask: [],
      initPost: []

    }
  },
  // created() {
  //   this.$store.dispatch(INIT_ALL)
  // },
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
    uid() {
      return this.$store.state.uid
    },

    ...mapState(['page']),
    ...mapState(['tasks']),
    ...mapState(['posts']),
    ...mapState(['sellectPosts']),
    ...mapState(['alls'])
  },
  mounted: function () {
    // this.isWaiting = true
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.$store.commit('setLogin', true)
    //     this.$store.commit('setUid', user.uid)
    //     this.$store.commit('setUserEmail', user.email)
    //     this.$store.commit('setUserName', user.displayName)
    //     this.$store.commit('setUserPhotoUrl', user.photoURL)
    //     this.isWaiting = false
    //   } else {
    //     this.$store.commit('setLogin', false)
    //     this.$store.commit('setUid', null)
    //     this.$store.commit('setUserEmail', '')
    //     this.$store.commit('setUserName', '')
    //     this.$store.commit('setUserPhotoUrl', '')
    //     this.isWaiting = false
    //   }
    // })
    if (this.isUser) {
      alert('maounted login uid: ' + this.uid)
      // this.userSellect = {
      //   uid: '',
      //   taskIdx: 0,
      //   postIdx: 0,
      //   task: 'task',
      //   post: 'post',
      //   tasklists: [],
      //   postLists: []
      // }
      // this.userSellect.uid = this.uid

      // alert(this.uid)
      this.$store.dispatch(
        GET_USERDATA,
        this.userSellect).then(() => {
        // this.initTask = this.$store.getters.getInitTask
        alert('init key--- : ' + this.tasks[0].title)
        this.tasks.forEach((task, index) => {
          if (index === 0) {
            this.initTaskKey = task['.key']
            this.sp = this.$store.getters.getSellectPost(this.initTaskKey)
          }
        })
        alert('keyinitTaskKey: ' + this.initTaskKey)
        alert('sp: ' + this.sp)
        // this.initPost = this.$store.getters.getInitPost(0)
      })

      // this.sp = this.$store.getters.getSellectPost(task['.key'])
    } else {
      alert('maounted logout')
    }
  },
  methods: {
    postStagingUp(idx) {
      alert('postStagingUp: ' + idx)
    },
    postClear(idx) {
      alert('postClear: ' + idx)
    },
    link_commit(linkPath) {
      this.active = true
      this.$store.commit('pagePathSet', linkPath)
      setTimeout(() => {
        this.$router.push({ path: linkPath })
      }, 500)
    },
    addTaskFirebase() {
      this.$store.dispatch(ADD_USERTASK,
        { title: this.taskText, uid: this.uid, done: false })
      this.taskText = ''
      this.isNewTask = false
    },
    addPostFirebase(sellectTask, TaskKey) {
      this.$store.dispatch(ADD_USERPOST,
        { title: this.postText,
          uid: this.uid,
          task: sellectTask,
          done: false,
          key: TaskKey
        })
      this.postText = ''
      this.isNewPost = false
    },
    setSelectTask(index, task) {
      this.sellectTaskIdx = index
      this.sellectTask = task
      this.isCgTask = false
      // alert('task ' + task['.key'])
      // this.sp = this.posts.filter((post) => {
      //   return post.key === task['.key']
      // })
      this.sp = this.$store.getters.getSellectPost(task['.key'])
      this.sellectPostIdx = 0
    },
    setSelectPost(index, post) {
      this.sellectPostIdx = index
      this.sellectPost = post
      // this.isCgPost = false
    },

    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).then(
        function (result) {
          console.log('google login')
        }
      ).catch(function (error) {
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
.conContent{
    position:flex;
    width:100vw;
    padding: 2rem 2rem;
    @media (min-width: 768px){
        padding: 8rem 8rem;
    }
    background-color: $footer-color-color;
}
.flex-container{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content:  flex-start;
   align-items: flex-start;
   @media ( min-width: 992px ){
       flex-direction: row;

   }
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
    flex-direction:column;
    h3{
        display: inline-block;
    }
    i{
        cursor: pointer;
    }
}
.newTask, .newPost{
    h3{
        display: inline-block
    }
    i{
        cursor: pointer;
    }
}

.image-mask{
    display: block;
    border-radius: 50%;
    width:5rem;
    height:5rem;
    margin-bottom: 2rem;
    @media (min-width: 992px) {
        width:10rem;
        height:10rem;
        margin-bottom: 5rem;
    //     display:flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: row;
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
.login-loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    @extend %center;
    background-color: #2196F3;
    }
.taskTitle{
  font-size: 2.8rem;
}
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
</style>
