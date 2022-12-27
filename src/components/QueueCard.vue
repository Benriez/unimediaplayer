<template>
  <li class="row queue-card">
    <div class="col-2 queue-card-left">
      <div class="column queue-card-preview">
        <q-icon class="self-center q-icon" name="play_arrow" style="color: white;"/>
      </div>
    </div>


    <div class="col-9 queue-card-center">
      <p class="queue-card-text">{{ trackname }}</p>
      <p class="queue-card-text">{{ album }}</p>
      <p class="queue-card-text">{{ artist }}</p>
    </div>


    <div class="col-1 queue-card-right column">
      <q-icon class="self-center q-icon" name="drag_indicator" />
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QueueCard',
  props: {
    trackname: {
      type: String,
      default: ''
    },
    album: {
      type: String,
      default: ''
    },
    artist: {
      type: String,
      default: ''
    }
  } 
})
</script>


<style>
  .queue-card{
    width:100%; 
    height: 5rem; 
    background-color: white;
    border-bottom: 1px solid rgb(0 0 0 / 18%);
  }

  .queue-card-left{
    height: 100%; 
    padding: .5rem;
  }

  .queue-card-center{
    padding: .3rem; 
    height:100%; 
    border-left: 1px solid rgb(0 0 0 / 18%);
    border-right: 1px solid rgb(0 0 0 / 18%)
  }

  .queue-card-right{
    height:100%; 
    display: flex; 
    justify-content: center;
  }

  .queue-card-preview{
    display: flex; 
    justify-content: center; 
    width:100%; 
    height: 100%; 
    background-color: black; 
    border-radius: .25rem;
  }

  .queue-card-text{
    margin-bottom: 0; 
    margin-left: 1rem;
  }

  .q-icon{
    font-size: 1.5rem;
  }
</style>