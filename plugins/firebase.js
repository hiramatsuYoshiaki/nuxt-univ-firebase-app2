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
  // apiKey: 'AIzaSyA6tdW1nraEFMImrgR4AaVCO6qrJqRw5kc',
  // authDomain: 'oauth3-11020.firebaseapp.com',
  // databaseURL: 'https://oauth3-11020.firebaseio.com',
  // projectId: 'oauth3-11020',
  // storageBucket: 'oauth3-11020.appspot.com'

  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET

  // FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  //   FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  //   FIREBASE_DATABASEURL: process.env.FIREBASE_DATABASEURL,
  //   FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
  //   FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
  //   FIREBASE_API_KEY='AIzaSyA6tdW1nraEFMImrgR4AaVCO6qrJqRw5kc'
  // FIREBASE_AUTH_DOMAIN='oauth3-11020.firebaseapp.com'
  // FIREBASE_DATABASEURL='https://oauth3-11020.firebaseio.com'
  // FIREBASE_PROJECTID='oauth3-11020'
  // FIREBASE_STORAGEBUCKET='oauth3-11020.appspot.com'

// FIREBASE_API_KEY='AIzaSyA6tdW1nraEFMImrgR4AaVCO6qrJqRw5kc'
// FIREBASE_AUTH_DOMAIN='oauth3-11020.firebaseapp.com'
// FIREBASE_DATABASEURL='https://oauth3-11020.firebaseio.com'
// FIREBASE_PROJECTID='oauth3-11020'
// FIREBASE_STORAGEBUCKET='oauth3-11020.appspot.com'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase
