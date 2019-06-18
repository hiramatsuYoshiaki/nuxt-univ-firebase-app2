// import { auth } from '~/plugins/firebase'
// export default function ({ route, store, redirect }) {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       // store.dispatch("auth/gotUser", user)
//       store.commit('setLogin', true)
//       store.commit('setUserEmail', user.email)
//       store.commit('setUserName', user.displayName)
//       store.commit('setUserPhotoUrl', user.photoURL)
//     } else if (route.name !== 'login') redirect('/login')
//   })
// }
// export default function ({ route }) {
//   console.log('サンプルミドルウェア', route.path)
// }
export default function ({ route, store, redirect }) {
  // console.log('サンプルミドルウェア', route.path)
  const linkPath = '/login'
  if (!store.state.isLogin) {
    store.commit('pagePathSet', linkPath)
    return redirect(linkPath)
  }
}
// link_commit(linkPath) {
//     this.active = true
//     this.$store.commit('pagePathSet', linkPath)
//     setTimeout(() => {
//       this.$router.push({ path: linkPath })
//     }, 500)
//   }
