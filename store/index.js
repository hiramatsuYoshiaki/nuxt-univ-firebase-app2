// import { firebaseMutations } from 'vuexfire'
import firebase from '@/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { ADD_TODO, REMOVE_TODO, INIT_TODO } from './actionTypes'

const db = firebase.database()
const itemsRef = db.ref('todos')
// const itemsRef = db.ref('meetups')
// const itemsRef = db.ref('tourdehdr')
console.log('db: ' + itemsRef)

export const state = () => ({
  page: 'home',
  starts: [],
  counter: 0,
  // firebase
  items: [], 
  user: null 
})

export const mutations = {
  setStars(state, payload) {
    state.stars = payload
  },
  pagePathSet(state, payload) {
    state.page = payload
  },
  // home: (state) => { state.page = 'home' },
  // works: (state) => { state.page = 'works' },
  // projects: (state) => { state.page = 'projects' },
  // about: (state) => { state.page = 'about' },
  // contact: (state) => { state.page = 'contact' },
  // service: (state) => { state.page = 'service' },

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
  })
}
// firebase.database().ref('meetups').child(payload.id).update(updateObj)

export const getters = {
  getItems: (state) => {
    return state.items
  }
}
