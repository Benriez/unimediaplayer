import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', {
  state: () => ({
    authenticated: true,
    name:"",
    email: "", 
    jwt: "",
    online: false,
    leftDrawerOpen: false
  }),
  getters: {
    isOnline: (state) => state.online,
  },
  actions: {
    toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    },
    register({}, payload) {
      console.log('try register')
      console.log(payload)
      createUserWithEmailAndPassword(firebase_auth, payload.email, payload.password).then(response => {
          console.log(response)
          let userId = firebase_auth.currentUser.uid
          firebase_db.ref('users/' + userId).set({
              name: payload.name,
              email: payload.email
          })
      }).catch(error=> {
          console.log('ERROR')
          console.log(error.message)
      })
    },
    loginUser({}, payload) {
      signInWithEmailAndPassword(firebase_auth, payload.email, payload.password)
        .then(response => {
          console.log(response)
        })
        .then(() => {
          console.log('done')
          this.router.push({ name: 'Feed' })
        })
        .catch(error=>{
          console.log(error.message)
        })
    },
  },
});
