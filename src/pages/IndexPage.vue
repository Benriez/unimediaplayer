<template>
  <q-page class="flex">
    <div class="row" style="width:100%">
      <div class="col-2">
        Left Panel
      </div>
      <div class="col-8" style="background-color:#E1E1E1; padding: .3rem;">
        <div style="height: 100vh">
          <q-video
            :ratio="16/9"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344277146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
          <!-- https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344277146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true -->
          <!-- <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344277146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bendust_official" title="Ben Dust" target="_blank" style="color: #cccccc; text-decoration: none;">Ben Dust</a> · <a href="https://soundcloud.com/bendust_official/bentech-no-one-takes-me-down-ben-dust-remix-preview" title="Bentech &amp; Sis - No One Takes Me Down (Ben Dust Remix) - OUT NOW" target="_blank" style="color: #cccccc; text-decoration: none;">Bentech &amp; Sis - No One Takes Me Down (Ben Dust Remix) - OUT NOW</a></div> -->
          <div class="queue" style="width: 100%; height: 100%;">
            <div class="queue-wrapper">
              <p style="margin-bottom: 0">Queue ( / {{queueList.length}})</p>
              <q-btn label="Add" @click="addLink" class="addBtn">
                <q-icon class="self-center q-icon" name="add_circle" style="margin-left:.5rem" />
              </q-btn>
            </div>
            <ul style="padding-left: 0; margin-top: 0rem;">
              <queue-card 
                v-for="link in queueList"
                :key="link.trackname"
                v-bind="link"
              />
            </ul>
          </div>
        </div>
      </div>
      <div class="col-2">
        Right Panel
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import QueueCard from '../components/QueueCard.vue'
import TweenMax from 'gsap'


const trackData = [
  {
    trackname: 'The Crusaders - My Lady (Todd Terje Tangoterje Edit)',
    album: '',
    artist: 'dj tigerstripes',
    url: 'https://soundcloud.com/dj-tiger-stripes/the-crusaders-my-lady-todd-terje-tangoterje-edit'
  },
  {
    trackname: 'Diamond Veins feat. Sarah Rebecca',
    album: 'album',
    artist: 'French79',
    url: 'https://soundcloud.com/french79music/diamond-veins'
  },
  {
    trackname: 'Inside My Love',
    album: 'album',
    artist: 'Buzz Compass',
    url: 'https://soundcloud.com/buzzcompass/inside-my-love-rework'
  },
  {
    trackname: 'Session #8 Lydia Birthday',
    album: 'album',
    artist: 'Psychonaut25',
    url: 'https://livesets.com/psychonaut25/session/54483'
  }
]


export default defineComponent({
  name: 'IndexPage',
  components: {
    QueueCard
  },
  setup () {
    const $q = useQuasar()

    function addLink () {
      $q.dialog({
        title: 'Add new URL',
        message: 'Paste in youre link',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
          console.log('>>>> OK, received', data)
      }).onCancel(() => {
          console.log('>>>> Cancel')
      }).onDismiss(() => {
          console.log('I am triggered on both OK and Cancel')
      })
    }

    return { addLink }
    
  },
  data () {
    return {
      queueList: trackData
    }
  },
  
})
</script>


<style>
  .addBtn:before{
    box-shadow: none;
  }

  .queue-wrapper{
    background-color:white; 
    border-bottom: 1px solid rgb(0 0 0 / 18%);
    display:flex;display: flex; 
    justify-content: space-between; 
    padding: .5rem
  }
</style>
