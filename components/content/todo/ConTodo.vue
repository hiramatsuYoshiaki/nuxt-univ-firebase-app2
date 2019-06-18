<template>
  <div class="conContent">
    <div class="flex-container">
      <div class="one-col">
        <div>
          Project Todos
        </div>
        <div v-if="isWaiting">
          loading....
        </div>
        <div v-else>
          <div v-if="isUser">
            <p>{{ userName }}</p>
            <img
              :src="userPhotoUrl"
              alt="user image"
              class="image-mask"
            >
            <!-- <div v-for="(task, index ) in tasks" :key="index">
              <div v-if="task.userEmail === userEmail" />
              <div @click="setSelectUser(task.userEmail, task.task)">
                {{ task.title }}
              </div>
            </div> -->
          </div>

          <div v-else>
            <div class="btn-box" @click="googleLogin">
              Login with Google Account
            </div>
          </div>

          <!-- <div v-if="isSelectTask ">
            <div v-for="(todo, index ) in todos" :key="index">
              <div v-if="(todo.userEmail === userEmail) && (todo.task === isSelectTask)">
                <div v-for="(todo, index) in todos" :key="index">
                  <div @click="setSelectTask(todo.userEmail, todo.task)">
                    {{ todo.todo }}
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div v-if="isUser">
      <div class="flex-container">
        <div class="three-col">
          <div class="todo-header">
            <div class="todo-header-text">
              Todo
            </div>
            <div>
              <i class="material-icons" style="border: 1px solid red"> add </i>

              <i
                class="material-icons"
                @click="todoStaging(selectTodo,selectTaskId,selectUser)"
              >
                call_made
              </i>
              <i class="material-icons">
                call_received
              </i>
              <i class="material-icons">
                clear
              </i>
            </div>
          </div>
          <div class="list-section">
            <div class="flex-list">
              <div class="list-title-col">
                <div v-for="(todo, index) in todos" :key="index">
                  <div
                    v-if=" (todo.userEmail=== selectUser)"
                  >
                    <div @click="setSelectTodo(index)">
                      <i v-if="selectTodo !== index" class="material-icons">
                        radio_button_unchecked
                      </i>
                      <i v-if="selectTodo === index" class="material-icons">
                        radio_button_checked
                      </i>
                      {{ todo.todo }}{{ todo.stage }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="three-col">
          <div class="todo-header">
            <div class="todo-header-text">
              In progress
            </div>
            <div>
              <i class="material-icons" style="border: 1px solid red">
                add
              </i>

              <i class="material-icons">
                call_made
              </i>
              <i class="material-icons">
                call_received
              </i>
              <i class="material-icons">
                clear
              </i>
            </div>
          </div>

          <div class="list-section">
            <div class="flex-list">
              <div class="list-title-col">
                <div v-for="(list, index ) in todolists" :key="index">
                  <div v-if="list.user === selectUser">
                    <div v-for="(task, index) in list.tasks" :key="index">
                      <div v-if="task.taskId === selectTaskId">
                        <div v-for="(title, index) in task.titles" :key="index">
                          <div v-if="title.stage === 'progress'">
                            <div @click="setSelectProgress(index)">
                              <i v-if="selectProgress !== index" class="material-icons">
                                radio_button_unchecked
                              </i>
                              <i v-if="selectProgress === index" class="material-icons">
                                radio_button_checked
                              </i>
                              {{ title.titleName }}
                              {{ index }}
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
          <div class="todo-header">
            <div class="todo-header-text">
              Done
            </div>
            <div>
              <i class="material-icons" style="border: 1px solid red">
                add
              </i>

              <i class="material-icons">
                call_made
              </i>
              <i class="material-icons">
                call_received
              </i>
              <i class="material-icons">
                clear
              </i>
            </div>
          </div>
          <div class="list-section">
            <div class="flex-list">
              <div class="list-title-col">
                <div v-for="(list, index ) in todolists" :key="index">
                  <div v-if="list.user === selectUser">
                    <div v-for="(task, index) in list.tasks" :key="index">
                      <div v-if="task.taskId === selectTaskId">
                        <div v-for="(title, index) in task.titles" :key="index">
                          <div v-if="title.stage === 'done'">
                            <div @click="setSelectDone(index)">
                              <i v-if="selectDone !== index" class="material-icons">
                                radio_button_unchecked
                              </i>
                              <i v-if="selectDone === index" class="material-icons">
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
      selTodos: {
        selUser: null,
        selTaskId: null,
        selTodos: null
      },
      selectTodo: -1,
      selectProgress: -1,
      selectDone: -1,
      // user----------------------------------------------------------------
      users: [
        { user: 'demo0000', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'hiramatsuYoshiaki', uid: '1111', userEmail: 'hiramatsu3300@gmail.com' },
        { user: 'guest0000', uid: '222', userEmail: 'guest@gmail.com' }
      ],
      // task----------------------------------------------------------------
      tasks: [
        { user: 'demo0000', task: 1, title: 'task1', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo0000', task: 2, title: 'task2', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo0000', task: 3, title: 'task3', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 1, title: 'task1', uid: '1111', userEmail: 'hiramatsu3300@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 2, title: 'task2', uid: '1111', userEmail: 'hiramatsu3300@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 3, title: 'task3', uid: '1111', userEmail: 'hiramatsu3300@gmail.com' },
        { user: 'guest0000', task: 1, title: 'task1', uid: '222', userEmail: 'guest@gmail.com' },
        { user: 'guest0000', task: 2, title: 'task2', uid: '222', userEmail: 'guest@gmail.com' },
        { user: 'guest0000', task: 3, title: 'task3', uid: '222', userEmail: 'guest@gmail.com' }
      ],
      // todo----------------------------------------------------------------
      todos: [
        { user: 'demo000', task: 1, todo: 'todo1', stage: 'todo', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 1, todo: 'todo2', stage: 'todo', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 1, todo: 'todo3', stage: 'todo', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 1, todo: 'todo4', stage: 'prosess', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 1, todo: 'todo5', stage: 'done', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 2, todo: 'todo1', stage: 'todo', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 2, todo: 'todo2', stage: 'prosess', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 2, todo: 'todo3', stage: 'done', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 3, todo: 'todo4', stage: 'todo', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'demo000', task: 3, todo: 'todo5', stage: 'todo', uid: '0000', userEmail: 'demo@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 1, todo: 'todo1', stage: 'todo', uid: '1111', userEmail: 'google3300@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 1, todo: 'todo2', stage: 'todo', uid: '1111', userEmail: 'google3300@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 1, todo: 'todo3', stage: 'todo', uid: '1111', userEmail: 'google3300@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 1, todo: 'todo4', stage: 'todo', uid: '1111', userEmail: 'google3300@gmail.com' },
        { user: 'hiramatsuYoshiaki', task: 1, todo: 'todo5', stage: 'todo', uid: '1111', userEmail: 'google3300@gmail.com' },
        { user: 'guest0000', task: 1, todo: 'todo1', stage: 'todo', uid: '222', userEmail: 'guest@gmail.com' },
        { user: 'guest0000', task: 1, todo: 'todo2', stage: 'todo', uid: '222', userEmail: 'guest@gmail.com' },
        { user: 'guest0000', task: 1, todo: 'todo3', stage: 'todo', uid: '222', userEmail: 'guest@gmail.com' },
        { user: 'guest0000', task: 1, todo: 'todo4', stage: 'todo', uid: '222', userEmail: 'guest@gmail.com' },
        { user: 'guest0000', task: 1, todo: 'todo5', stage: 'todo', uid: '222', userEmail: 'guest@gmail.com' }
      ],
      // todolists-----------------------------------------------------------
      todoLists: [
        {
          todoId: 1,
          user: 'demo@gmail.com',
          userName: 'Demo User',
          taskId: 1,
          taskName: 'Demo task1',
          titleName: 'demo Title11',
          done: false,
          stage: 'todo',
          link: 'aaa'
        },
        {
          todoId: 2,
          user: 'demo@gmail.com',
          userName: 'Demo User',
          taskId: 2,
          taskName: 'Demo task2',
          titleName: 'demo Title22',
          done: false,
          stage: 'todo',
          link: 'aaa'
        },
        {
          todoId: 3,
          user: 'demo@gmail.com',
          userName: 'Demo User',
          taskId: 3,
          taskName: 'Demo task3',
          titleName: 'demo Title33',
          done: false,
          stage: 'progress',
          link: 'aaa'
        },
        {
          todoId: 4,
          user: 'demo@gmail.com',
          userName: 'Demo User',
          taskId: 4,
          taskName: 'Demo task4',
          titleName: 'demo Title44',
          done: false,
          stage: 'done',
          link: 'aaa'
        },
        {
          todoId: 11,
          user: 'hiramatsu3300@gmail.com',
          userName: 'login User',
          taskId: 1,
          taskName: 'login task1',
          titleName: 'login Title11',
          done: false,
          stage: 'todo',
          link: 'aaa'
        },
        {
          todoId: 12,
          user: 'hiramatsu3300@gmail.com',
          userName: 'login User',
          taskId: 2,
          taskName: 'login task2',
          titleName: 'login Title22',
          done: false,
          stage: 'todo',
          link: 'aaa'
        },
        {
          todoId: 13,
          user: 'hiramatsu3300@gmail.com',
          userName: 'login User',
          taskId: 3,
          taskName: 'login task3',
          titleName: 'login Title33',
          done: false,
          stage: 'todo',
          link: 'aaa'
        },
        {
          todoId: 14,
          user: 'hiramatsu3300@gmail.com',
          userName: 'login User',
          taskId: 4,
          taskName: 'login task4',
          titleName: 'login Title44',
          done: false,
          stage: 'progress',
          link: 'aaa'
        },
        {
          todoId: 15,
          user: 'hiramatsu3300@gmail.com',
          userName: 'login User',
          taskId: 1,
          taskName: 'login task5',
          titleName: 'login Title55',
          done: false,
          stage: 'done',
          link: 'aaa'
        }
      ],
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
    todolists() {
      return this.$store.state.todoLists
    },
    ...mapState([
      'page'
    ])
    // ...mapState([
    //   'todoLists'
    // ])
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
    todoStaging(selectTodo, selectTaskId, selectUser) {
      this.selTodos.selUser = selectUser
      this.selTodos.selTaskId = selectTaskId
      this.selTodos.selTodos = selectTodo

      this.$store.commit('setStage', this.selTodos)
    },

    setSelectTodo(index) {
      this.selectTodo = index
    },
    setSelectProgress(index) {
      this.selectProgress = index
    },
    setSelectDone(index) {
      this.selectDone = index
    },
    setSelectUser(user) {
      this.selectUser = user
      console.log('use: ' + user)
      this.isSelectUser = false
    },

    setSelectTask(userEmail, task) {
      this.selectUser = userEmail
      this.selectTaskId = task
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
      }).catch(function (error) {
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
  height:100%;
  min-height: calc( 100vh - #{$header-height} );
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
  display: block;
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
