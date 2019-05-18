// import { firebaseMutations } from 'vuexfire'
import firebase from '@/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { ADD_TODO,
  REMOVE_TODO,
  INIT_TODO,
  INIT_MEETUP,
  CREATE_IMGDATAS
} from './actionTypes'
// const firestorage = firebase.storage()
const db = firebase.database()
const itemsRef = db.ref('todos')
const meetupsRef = db.ref('meetups')
const imgdatasRef = db.ref('imgdatas')
// const itemsRef = db.ref('tourdehdr')

// const storageRef = firebase.storage().ref()

// ref = firebase.storage().ref().child('img/sample.jpg');
// ref.getDownloadURL().then((url) => {
//   document.getElementById('image').src = url;
// });

export const state = () => ({
  page: 'home',
  starts: [],
  counter: 0,
  // firebase
  items: [],
  meetups: []
  // user: null
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
  // uploadImage: (context, payload) => {
  //   console.log('uploadImage')
  //   console.log(payload.name)
  //   return new Promise((resolve, reject) => {
  //     // firestorage にファイルをアップロード
  //     // const uploadTask =
  //     firestorage
  //       .ref('images/' + payload.name)
  //       .put(img)
  //       .then((snapshot) => {
  //         // アップロード完了処理。URLを取得し、呼び出し元へ返す。
  //         console.log('アップロード完了処理')
  //         snapshot.ref.getDownloadURL().then((url) => {
  //           resolve(url)
  //         })
  //       })
  //   })
  // },
  // items
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
    bindFirebaseRef('items', meetupsRef, { wait: true })
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

    // imgdatasRef.push(imgDatas).then((data) => {
    //   console.log('1 CREATE_IMGDATAS')
    //   key = data.key
    //   return key
    // }).then((key) => {
    //   const filename = createDatas.filename
    //   ext = filename.slice(filename.lastIndexOf('.'))
    //   console.log(createDatas.image)
    //   console.log(filename)
    //   console.log(key)
    //   console.log(ext)
    //   return firebase.storage().ref('images/' + key + '.' + ext).put(createDatas.image)
    // }).then((fileData) => {
    //   return firebase.storage().ref('images/' + key + '.' + ext).getDownloadURL()
    // }).then((url) => {
    //   console.log('url:' + url)
    //   return imgdatasRef.child(key).update({ imageUrl: url })
    // })
      // .then(() => {
      //   commit('createMeetup', {
      //     ...meetup,
      //     imageUrl: imageUrl,
      //     id: key
      //   })
      // })
      .catch((err) => {
        console.log('firebase error code: ' + err)
      })

    // bindFirebaseRef('todos', ref).then(() => {
    //   commit('setTodosLoaded', true)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }
  // [CREATE_MEETUP]: async ({ context, dispatch }, imgdatas) => {
  // imgdatasRef.push(imgdatas)
  // console.log('create meetup')
  // console.log(imgdatas.title)
  // console.log(imgdatas.filename)
  // console.log(imgdatas.done)
  // console.log(imgdatas.image)

  // const fbData = {
  //   title: imgdatas.title,
  //   filename: imgdatas.filename,
  //   dane: imgdatas.done
  // }
  // const imageData = {
  //   image: 'data:image/jpeg;base64'
  // }
  // const imageUrl = {
  //   imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/FuseGirl7_sunset1_leftHandOnHip_3StripLook.jpg'
  // }
  // databaseに新規作成

  // await dispatch(CREATE_IMGDATAS, imgdatas)
  // ストレージに追加

  // databaseにurlを追加

  // stateに新規分を追加
  // export const ADD_URL_IMGDATAS = 'ADD_URL_IMGDATAS'
  // export const ADD_IMG_STRAGE = 'ADD_IMG_STRAGE'
  // }

  // createMeetup({ bindFirebaseRef, dispach, commit }, imgdatas) {
  //   console.log('createdMeetup')
  //   console.log(imgdatas)
  // }

  // let imageUrl
  // let key
  // firebase.database().ref('imgdatas').push(meetup).then((data) => {
  //   key = data.key
  //   return key
  // })
  //  .then(key => {
  //   const filename = payload.image.name
  //   const ext = filename.slice(filename.lastIndexOf('.'))
  //   return firebase.storage().ref('imgdatas/' + key + '.' + ext).put(payload.image)
  // })
  // .then(fileData => {
  //   imageUrl = fileData.metadata.downloadURLs[0]
  //   return firebase.database().ref('tourdehdr').child(key).update({imageUrl: imageUrl})
  // })
  // .then(() => {
  //   commit('createMeetup', {
  //     ...meetup,
  //     imageUrl: imageUrl,
  //     id: key
  //   })

  // async actionA (({ commit }) {
  //   commit('gotData', await getData())
  // },
  // async actionB ({ dispatch, commit }) {
  //   await dispatch('actionA') // `actionA` が完了するのを待機する
  //   commit('gotOtherData', await getOtherData())
  // })

}
// firebase.database().ref('meetups').child(payload.id).update(updateObj)

export const getters = {
  getItems: (state) => {
    return state.items
  }
}
