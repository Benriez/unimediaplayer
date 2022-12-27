<template>
  <q-page class="row justify-center">
    <div class="column">
      <div class="row q-pt-md">
        <q-card square class="q-pa-md">
          <h4 class="text-center" style="margin-bottom: 1rem;">Anmelden</h4>
          <q-card-section>
            <q-form class="q-gutter-sm">
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md q-mt-lg">
            <q-btn v-on:click="login()" unelevated color="primary" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none q-mt-md">
            <div class="q-pa-md q-gutter-sm">
              <q-btn class="q-mt-xl" color="white" text-color="primary" unelevated to="/register" label="Register" no-caps />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useUserStore } from '../stores/user-store' 

export default {
  name: 'LoginAuth',
  setup () {
    const store = useUserStore()

    return {
      // you can return the whole store instance to use it in the template
      store
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    console.log('mounted')
    let drawer = document.getElementsByClassName('q-drawer-container')[0]
    let container = document.getElementsByClassName('q-page-container')[0]

    drawer.classList.add('q-drawer-hide')
    container.classList.remove('q-page-container')
    container.classList.add('q-container-without-drawer')


  },
  methods: {
      login() {
        let payload={'email': this.email, 'password':this.password}
        this.store.loginUser({},payload)
      },
      register() {
      this.$router.replace({ name: "RegisterAuth" });
    }
  }
}

</script>

<style>
  .q-card {
    width: 360px;
    box-shadow: none;
  }

  .q-drawer-hide{
    transform: translateX(-200px)!important;
    display: none!important;
  }

  .q-container-without-drawer{
    padding-left: 0px!important;
  }
</style>