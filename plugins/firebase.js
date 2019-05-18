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
  apiKey: 'AIzaSyA6tdW1nraEFMImrgR4AaVCO6qrJqRw5kc',
  authDomain: 'oauth3-11020.firebaseapp.com',
  databaseURL: 'https://oauth3-11020.firebaseio.com',
  projectId: 'oauth3-11020',
  storageBucket: 'oauth3-11020.appspot.com'
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase
