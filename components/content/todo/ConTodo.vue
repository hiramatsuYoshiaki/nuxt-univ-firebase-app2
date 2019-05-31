<template>
  <div class="conContent">
    <div class="flex-container">
      <!-- <div class="three-col">
        Project Todos<i class="material-icons">
          menu
        </i><i class="material-icons">
          check
        </i><i class="material-icons">
          cancel
        </i><i class="material-icons">
          close
        </i><i class="material-icons">
          radio_button_checked
        </i><i class="material-icons">
          radio_button_unchecked
        </i>
      </div> -->
      <div class="one-col">
        <div>
          Project Todos
        </div>
        <div @click="isSelectUser = !isSelectUser">
          <span v-if="selectUser">
            {{ selectUser }}
          </span>
          <span v-else>
            ユーザーを選択してください
          </span>
          <i v-if="!isSelectUser" class="material-icons">
            expand_more
          </i>
          <i v-if="isSelectUser" class="material-icons">
            expand_less
          </i>
        </div>
        <div v-if="isSelectUser">
          <div v-for="(list, index ) in lists" :key="index">
            <div @click="setSelectUser(list.user)">
              {{ list.user }}
            </div>
          </div>
        </div>
        <div v-if="selectUser">
          <div @click="isSelectTask = !isSelectTask">
            <span v-if="selectTask">
              {{ selectTask }}
            </span>
            <span v-else>
              タスクを選択してください
            </span>
            {{ selectTask }}
            <i v-if="!isSelectTask" class="material-icons">
              expand_more
            </i>
            <i v-if="isSelectTask" class="material-icons">
              expand_less
            </i>
          </div>
          <div v-if="isSelectTask">
            <div v-for="(list, index ) in lists" :key="index">
              <div v-if="list.user === selectUser">
                <div v-for="(task, index) in list.tasks" :key="index">
                  <div @click="setSelectTask(task.taskId, task.taskName)">
                    {{ task.taskName }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-container">
      <div class="three-col">
        <div class="todo-header">
          <div class="todo-header-text">
            Todo
          </div>
          <div>
            <i class="material-icons" style="border: 1px solid red">
              add
            </i>
            <i class="material-icons">
              clear
            </i>
            <i class="material-icons">
              call_made
            </i>
            <i class="material-icons">
              call_received
            </i>
          </div>
        </div>
        <div class="list-section">
          <div class="flex-list">
            <div class="list-title-col">
              <div v-for="(list, index ) in lists" :key="index">
                <div v-if="list.user === selectUser">
                  <div v-for="(task, index) in list.tasks" :key="index">
                    <div v-if="task.taskId === selectTaskId">
                      <div v-for="(title, index) in task.titles" :key="index">
                        <div v-if="title.stage === 'todo'">
                          <div @click="setSelectTodo(index)">
                            <i v-if="selectTodo !== index" class="material-icons">
                              radio_button_unchecked
                            </i>
                            <i v-if="selectTodo === index" class="material-icons">
                              radio_button_checked
                            </i>
                            {{ title.titleName }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="three-col">
        <div>In Progress</div>
        <div class="list-section">
          <div class="flex-list">
            <div class="list-title-col">
              <div v-for="(list, index ) in lists" :key="index">
                <div v-if="list.user === selectUser">
                  <div v-for="(task, index) in list.tasks" :key="index">
                    <div v-if="task.taskId === selectTaskId">
                      <div v-for="(title, index) in task.titles" :key="index">
                        <div v-if="title.stage === 'progress'">
                          <div>
                            <i class="material-icons">
                              radio_button_unchecked
                            </i> <i class="material-icons">
                              radio_button_checked
                            </i>{{ title.titleName }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="three-col">
        <div>Done</div>
        <div class="list-section">
          <div class="flex-list">
            <div class="list-title-col">
              <div v-for="(list, index ) in lists" :key="index">
                <div v-if="list.user === selectUser">
                  <div v-for="(task, index) in list.tasks" :key="index">
                    <div v-if="task.taskId === selectTaskId">
                      <div v-for="(title, index) in task.titles" :key="index">
                        <div v-if="title.stage === 'done'">
                          <div>
                            <i class="material-icons">
                              radio_button_unchecked
                            </i> <i class="material-icons">
                              radio_button_checked
                            </i>{{ title.titleName }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      isOpenAccount: false,
      isWaiting: false,
      demoUser: 'demo@gmail.com',

      isSelectUser: false,
      isSelectTask: false,
      selectUser: null,
      selectTask: null,
      selectTaskId: 0,
      selectTodo: -1,
      selectProgress: -1,
      selectDane: -1,

      lists: [
        //   {user: user1, task: task, title: title, done: done, stage: stage, link: link},
        {
          user: 'demo@gmail.com',
          userName: 'Demo User',
          tasks: [
            {
              taskId: 1,
              taskName: 'Demo task1',
              titles: [
                {
                  titleName: 'demo Title11',
                  done: false,
                  stage: 'todo',
                  link: 'aaa'
                },
                {
                  titleName: 'demo Title12',
                  done: false,
                  stage: 'todo',
                  link: 'bbb'
                },
                {
                  titleName: 'demo Title13',
                  done: false,
                  stage: 'progress',
                  link: 'ccc'
                },
                {
                  titleName: 'demo Title14',
                  done: true,
                  stage: 'done',
                  link: 'ddd'
                }
              ]

            },
            {
              taskId: 2,
              taskName: 'Demo task2',
              titles: [
                {
                  titleName: 'demo Title21',
                  done: false,
                  stage: 'todo',
                  link: 'eee'
                }
              ]
            },
            {
              taskId: 3,
              taskName: 'Demo task3',
              titles: [
                {
                  titleName: 'demo Title31',
                  done: false,
                  stage: 'progress',
                  link: 'fff'
                }
              ]
            },
            {
              taskId: 4,
              taskName: 'Demo task4',
              titles: [
                {
                  titleName: 'demo Title41',
                  done: true,
                  stage: 'done',
                  link: 'ggg'
                }
              ]
            }

          ]
        },

        {
          user: 'hiramatsu3300@gmail.com',
          userName: 'login User',
          tasks: [
            {
              taskId: 10,
              taskName: 'login task1',
              titles: [
                {
                  titleName: 'login Title11',
                  done: false,
                  stage: 'todo',
                  link: 'aaa'
                },
                {
                  titleName: 'login Title12',
                  done: false,
                  stage: 'todo',
                  link: 'bbb'
                },
                {
                  titleName: 'login Title13',
                  done: false,
                  stage: 'progress',
                  link: 'ccc'
                },
                {
                  titleName: 'login Title14',
                  done: true,
                  stage: 'done',
                  link: 'ddd'
                }
              ]

            },
            {
              taskId: 12,
              taskName: 'login task2',
              titles: [
                {
                  titleName: 'login Title21',
                  done: false,
                  stage: 'todo',
                  link: 'eee'
                }
              ]
            },
            {
              taskId: 13,
              taskName: 'login task3',
              titles: [
                {
                  titleName: 'login Title31',
                  done: false,
                  stage: 'progress',
                  link: 'fff'
                }
              ]
            },
            {
              taskId: 14,
              taskName: 'login task4',
              titles: [
                {
                  titleName: 'login Title41',
                  done: true,
                  stage: 'done',
                  link: 'ggg'
                }
              ]
            }

          ]
        }

      ]
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
        this.$store.commit('setUserEmail', 'demo@gmail.com')
        this.$store.commit('setUserName', 'Demo')
        this.$store.commit('setUserPhotoUrl', '')
        this.isWaiting = false
      }
    })
  },
  methods: {
    setSelectTodo(index) {
      this.selectTodo = index
    },
    setSelectUser(user) {
      this.selectUser = user
      console.log('use: ' + user)
      this.isSelectUser = false
    },

    setSelectTask(taskId, taskName) {
      this.selectTask = taskName
      this.selectTaskId = taskId
      this.isSelectTask = false
    },

    chengeAccount() {
      this.$store.commit('pagePathSet', 'login')
      setTimeout(() => {
        this.$router.push({ path: 'login' })
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
  },
  // routing transition
  link_commit(linkPath) {
    // this.active = true
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
.todo-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.todo-header-text{
    font-size: 1.8rem;
}
</style>
