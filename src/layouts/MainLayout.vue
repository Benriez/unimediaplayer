<template>
  <q-layout view="lhh lpR lFf">

    <q-drawer show-if-above v-model="store.leftDrawerOpen" side="left" bordered class="primary-bg-color">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { useUserStore } from '../stores/user-store'

export default {
  setup () {
    const store = useUserStore()

    return {
      store
    }
  }
}
</script>



<style>
  .q-drawer{
    width: 200px!important;
  }

  /* .q-page-container{
    padding-left: 200px!important;
  } */


</style>