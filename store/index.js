// import { firebaseMutations } from 'vuexfire'
import firebase from '@/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { ADD_TODO,
  REMOVE_TODO,
  INIT_TODO,
  INIT_MEETUP,
  CREATE_IMGDATAS,
  ADD_POST,
  INIT_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_TASK,
  INIT_TASK,
  REMOVE_TASK,
  INIT_ALL,
  ADD_USERTASK,
  GET_USERDATA,
  ADD_USERPOST
  // GET_SELLECTPOST
} from './actionTypes'
const db = firebase.database()
// const itemsRef = db.ref('imgdatas')
// const meetupsRef = db.ref('imgdatas')
// const imgdatasRef = db.ref('imgdatas')
const itemsRef = db.ref('imgdatas')
// const postsRef = db.ref('posts/TmzUSvXZTuPRYuzEAXM00eFYX4n1')
const meetupsRef = db.ref('imgdatas')
const imgdatasRef = db.ref('imgdatas')

export const state = () => ({
  page: 'home',

  starts: [],
  counter: 0,
  items: [],
  posts: [],
  sellectPosts: [],
  tasks: [],
  alls: [],
  meetups: [],

  isLogin: false,
  user: [],
  userEmail: '',
  userName: '',
  PhotoUrl: '',
  uid: '',
  selectTaskIdx: 0,

  isWaiting: false,

  userSellectData: [],
  test: ''

})

export const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload
  },
  setUser(state, payload) {
    state.user = payload
  },
  setUid(state, payload) {
    state.uid = payload
  },
  setUserEmail(state, payload) {
    state.userEmail = payload
  },
  setUserName(state, payload) {
    state.userName = payload
  },
  setUserPhotoUrl(state, payload) {
    state.PhotoUrl = payload
  },

  setWaiting(state, payload) {
    state.Waiting = payload
  },

  setStars(state, payload) {
    state.stars = payload
  },
  test(state, payload) {
    state.test = payload
  },
  pagePathSet(state, payload) {
    state.page = payload
  },
  increment(state) {
    state.counter++
  },
  setPsots(state, payload) {
    state.sellectPosts = payload
  },

  // firebase
  ...firebaseMutations
}

export const actions = {

  [INIT_ALL]: firebaseAction(({ bindFirebaseRef }) => {
    const tasksRef = db.ref('userTask')
    bindFirebaseRef('alls', tasksRef, { wait: true })
  }),

  [INIT_TODO]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('items', itemsRef, { wait: true })
  }),

  [ADD_TODO]: firebaseAction((context, text) => {
    itemsRef.push(text)
  }),
  [REMOVE_TODO]: firebaseAction((context, key) => {
    itemsRef.child(key).remove()
  }),

  [INIT_TASK]: firebaseAction(({ bindFirebaseRef }, uid) => {
    const tasksRef = db.ref('tasks/' + uid)
    bindFirebaseRef('tasks', tasksRef, { wait: true })
  }),

  [ADD_TASK]: firebaseAction((context, task) => {
    db.ref('tasks').child(task.uid).push(task)
  }),
  [REMOVE_TASK]: firebaseAction((context, value) => {
    db.ref('tasks/' + value.uid).child(value.key).remove()
  }),

  [ADD_POST]: firebaseAction((context, post) => {
    db.ref('tasks/' + post.uid + '/' + post.task).child('posts').push(post)
  }),
  [REMOVE_POST]: firebaseAction((context, post) => {
    db.ref('tasks/' + post.uid + '/' + post.task + '/posts').child(post.key).remove()
  }),
  [UPDATE_POST]: firebaseAction((context, post) => {
    db.ref('tasks/' + post.uid + '/' + post.task + '/posts').child(post.key).update({ stage: post.stage })
    alert(post)
  }),
  [INIT_POST]: firebaseAction(({ bindFirebaseRef }, post) => {
    const postsRef = db.ref('tasks/' + post.uid + '/' + post.key + '/posts')
    bindFirebaseRef('posts', postsRef, { wait: true })
  }),

  [INIT_MEETUP]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('meetups', meetupsRef, { wait: true })
  }),

  [CREATE_IMGDATAS]: (context, createDatas) => {
    // console.log('CREATE_IMGDATAS')
    // console.log(createDatas.title)
    // console.log(createDatas.filename)
    // console.log(createDatas.image)
    const imgDatas = {
      title: createDatas.title,
      filename: createDatas.filename,
      done: createDatas.done,
      imageUrl: ''
    }
    const filename = createDatas.filename
    firebase.storage().ref('images/' + filename).put(createDatas.image)
      .then((fileData) => {
        return firebase.storage().ref('images/' + filename).getDownloadURL()
      }).then((url) => {
        imgDatas.imageUrl = url
        return imgdatasRef.push(imgDatas)
      })
      .catch((err) => {
        console.log('firebase error code: ' + err)
      })
  },
  [GET_USERDATA]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('tasks', db.ref('userTask'), { wait: true })
    bindFirebaseRef('posts', db.ref('userPost'), { wait: true })
  }),

  [ADD_USERTASK]: (context, task) => {
    db.ref('userTask').push(task)
  },
  [ADD_USERPOST]: (context, post) => {
    db.ref('userPost').push(post)
  }
  // [GET_SELLECTPOST]: (context, taskKey) => {
  //   alert('GET_SELLECTPOST**** key: ' + taskKey)
  //   context.commit('setPosts', getters.getSellectPost(taskKey))
  // }
}

export const getters = {
  getItems: (state) => {
    return state.items
  },
  getUserTask: state => (uid) => {
    return state.alls.filter(all => all.uid === uid)
  },
  getLoginData: (state) => {
    console.log('getLoginData')
    return state.alls.filter(all => all.uid === state.uid)
  },
  getLoginTask: (state, getters) => (idx) => {
    console.log('getLoginTask')
    console.log(idx)
    return getters.getLoginData[idx]
  },
  // getPosts: () => {
  //   alert('getPosts')
  // }
  getInitTaskKey: state => (taskKey) => {
    return state.posts.filter(post => post.key === taskKey)
  },
  getSellectPost: state => (taskKey) => {
    return state.posts.filter(post => post.key === taskKey)
  },
  getInitTask: (state) => {
    state.tasks.forEach((task, index) => {
      if (index === 0) {
        // alert('getInitTask key: ' + task['.key'])
        // alert('getInitTask key: ' + task.title)
        return task['.key']
      }
    })
  }
  // getInitPost: state => (key) => {
  //   alert('getInitPPPPPost idx: ' + key)
  // }
}
