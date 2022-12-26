<template>
  <q-layout view="lhh lpR lFf">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="primary-bg-color">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>

  .q-drawer{
    width: 200px!important;
  }

  .q-page-container{
    padding-left: 200px!important;
  }

</style>