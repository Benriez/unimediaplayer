<template>
  <li 
    class="row queue-card" 
    @click="setVideoUrl(url)"
    >
    <div class="col-2 queue-card-left">
      <q-img 
        :ratio="16/9"
        :src="thumbnail" 
        class="column queue-card-preview"
        style="background: linear-gradient(176deg, rgba(51,15,38,1) 0%, rgb(2 2 2) 100%);"
        >
        <q-icon class="self-center q-icon" name="play_arrow" style="color: white;"/>
      </q-img>
    </div>


    <div class="col-9 queue-card-center">
      <p class="queue-card-text" style="font-size: .9rem">{{ title }}</p>
      <p class="queue-card-text" style="font-size: .8rem">{{ artist }}</p>
      <p class="queue-card-text" style="font-size: .8rem; margin-top: .3rem">{{ provider }}</p>
    </div>


    <div class="col-1 queue-card-right column">
      <q-icon class="self-center q-icon" name="drag_indicator" />
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue'
import { usePlayerStore } from '../stores/player-store'

export default defineComponent({
  name: 'QueueCard',
  setup () {
    const player_store = usePlayerStore()

    return {
      player_store
    }
  },
  props: {
    id: {
      type: Number,
      default: -1
    },
    title: {
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
    },
    url: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    provider:{
      type: String,
      default: ''
    }
  },
  methods: {
    setVideoUrl (newUrl) {
      if(this.provider == "Youtube"){
        this.player_store.setUrl({}, newUrl)
        this.player_store.setId({}, this.id)
      } else if (this.provider == "Soundcloud"){
        this.player_store.setUrl({}, this.player_store.sc_player + newUrl + this.player_store.sc_decorator)
        this.player_store.setId({}, this.id)
      }
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

  .queue-card:hover{
    background-color: #E1E1E1;
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
    width:98%; 
    height: auto; 
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