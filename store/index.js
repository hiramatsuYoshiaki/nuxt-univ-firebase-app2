// import { firebaseMutations } from 'vuexfire'
import firebase from '@/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { ADD_TODO,
  REMOVE_TODO,
  INIT_TODO,
  INIT_MEETUP,
  CREATE_IMGDATAS
} from './actionTypes'
const db = firebase.database()
// const itemsRef = db.ref('imgdatas')
// const meetupsRef = db.ref('imgdatas')
// const imgdatasRef = db.ref('imgdatas')
const itemsRef = db.ref('imgdatas')
const meetupsRef = db.ref('imgdatas')
const imgdatasRef = db.ref('imgdatas')

export const state = () => ({
  page: 'home',
  starts: [],
  counter: 0,
  items: [],
  meetups: [],
  isLogin: false
})

export const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload
    console.log('isUser' + payload)
  },
  setStars(state, payload) {
    state.stars = payload
  },
  pagePathSet(state, payload) {
    state.page = payload
  },

  increment(state) {
    state.counter++
  },

  // firebase
  ...firebaseMutations
}

export const actions = {
  [INIT_TODO]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('items', itemsRef, { wait: true })
  }),
  [ADD_TODO]: firebaseAction((context, text) => {
    itemsRef.push(text)
  }),
  [REMOVE_TODO]: firebaseAction((context, key) => {
    itemsRef.child(key).remove()
  }),
  [INIT_MEETUP]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('meetups', meetupsRef, { wait: true })
  }),

  [CREATE_IMGDATAS]: (context, createDatas) => {
    console.log('CREATE_IMGDATAS')
    console.log(createDatas.title)
    console.log(createDatas.filename)
    console.log(createDatas.image)
    const imgDatas = {
      title: createDatas.title,
      filename: createDatas.filename,
      done: createDatas.done,
      imageUrl: ''
    }
    // const key = null
    // const ext = null
    const filename = createDatas.filename
    firebase.storage().ref('images/' + filename).put(createDatas.image)
      .then((fileData) => {
        return firebase.storage().ref('images/' + filename).getDownloadURL()
      }).then((url) => {
        console.log('url:' + url)
        imgDatas.imageUrl = url
        return imgdatasRef.push(imgDatas)
      })
      .catch((err) => {
        console.log('firebase error code: ' + err)
      })
  }
}
// firebase.database().ref('meetups').child(payload.id).update(updateObj)

export const getters = {
  getItems: (state) => {
    return state.items
  }
}
