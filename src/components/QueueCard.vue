<template>
  <div class="row" style="width:100%; height: 5rem; background-color: white">
    <div class="col-2" style="height: 100%; padding: .5rem;">
      <div class="column" style="display: flex; justify-content: center; width:100%; height: 100%; background-color: black; border-radius: .25rem;">
        <q-icon class="self-center" name="play_arrow" style="font-size: 1.5rem; color: white;"/>
      </div>
    </div>
    <div class="col-9" style="padding: .3rem; height:100%; border-left: 1px solid rgb(0 0 0 / 18%);border-right: 1px solid rgb(0 0 0 / 18%)">
      <p style="margin-bottom: 0; margin-left: 1rem;">Trackname</p>
      <p style="margin-bottom: 0; margin-left: 1rem;">Album</p>
      <p style="margin-bottom: 0; margin-left: 1rem;">Artist</p>

    </div>
    <div class="col-1 column" style="height:100%; display: flex; justify-content: center;">
      <q-icon class="self-center" name="drag_indicator" style="font-size: 1.5rem;"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QueueCard',

})
</script>
