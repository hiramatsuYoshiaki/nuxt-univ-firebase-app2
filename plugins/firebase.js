// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// import 'firebase/messaging'
// import 'firebase/functions'
// const serviceAccount = require('../serviceAccountKey.json')
// const config = serviceAccount

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: ''
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase
