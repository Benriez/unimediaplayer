<template>
  <template v-if="store.authenticated">
    <q-page class="flex">
      <div class="row" style="width:100%">
        <div class="col-2">
          Left Panel
        </div>
        <div class="col-8" style="background-color:#E1E1E1; padding: .3rem;">
          <div style="height: 100vh">
            <q-video
              ref="player"
              :ratio="16/9"
              v-bind:src="videoSrc"
            />
            <!-- https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344277146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true -->
            <!-- <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344277146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bendust_official" title="Ben Dust" target="_blank" style="color: #cccccc; text-decoration: none;">Ben Dust</a> · <a href="https://soundcloud.com/bendust_official/bentech-no-one-takes-me-down-ben-dust-remix-preview" title="Bentech &amp; Sis - No One Takes Me Down (Ben Dust Remix) - OUT NOW" target="_blank" style="color: #cccccc; text-decoration: none;">Bentech &amp; Sis - No One Takes Me Down (Ben Dust Remix) - OUT NOW</a></div> -->
            <div class="queue" style="width: 100%; height: 100%;">
              <div class="queue-wrapper">
                <p style="margin-bottom: 0">Queue ( / {{}})</p>
                <q-btn label="Add" @click="addLink" class="addBtn">
                  <q-icon class="self-center q-icon" name="add_circle" style="margin-left:.5rem" />
                </q-btn>
              </div>


              <div style="overflow:scroll; height:100%">
                <div  
                  @dragenter.prevent 
                  @dragover.prevent
                  >
                  <ul 
                    style="padding-left: 0; margin-top: 0rem; margin-bottom: 600px;"
                    >
                    <queue-card 
                      v-for="item in getList()"
                      :key="item.id"
                      v-bind="item"
                      draggable="true"
                      @drop="onDrop($event)"
                      @dragstart="startDrag($event)"
                      />
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div class="col-2">
          Right Panel
        </div>
      </div>
    </q-page>
  </template>

  <template v-else>
    <!-- <q-page class="flex"> -->
      <login-auth />
    <!-- </q-page> -->
  </template>


</template>



<script>
import { defineComponent, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useUserStore } from '../stores/user-store'
import { usePlayerStore } from '../stores/player-store'
import QueueCard from '../components/QueueCard.vue'
import LoginAuth from '../components/Login.vue'
import TweenMax from 'gsap'


const player_store = usePlayerStore()
var videoSrc



export default defineComponent({
  name: 'IndexPage',
  components: {
    QueueCard,
    LoginAuth
  },
  setup () {
    const $q = useQuasar()
    const store = useUserStore()
    var _el;
    const youtubeRegex = new RegExp(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|music\.youtube\.com\/watch\?v=)((\w|-){11})(?:\S+)?$/);
    const soundcloudRegex = new RegExp(/^(?:https?:\/\/)?(?:www\.)?soundcloud\.com\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)/);


    const items = ref([
      {
        id: 0,
        title: 'The Crusaders - My Lady (Todd Terje Tangoterje Edit)',
        album: 'album',
        artist: 'dj tigerstripes',
        url: 'https://soundcloud.com/dj-tiger-stripes/the-crusaders-my-lady-todd-terje-tangoterje-edit',
        provider: 'Soundcloud'
      },
      {
        id: 1,
        title: 'Diamond Veins feat. Sarah Rebecca',
        album: 'album',
        artist: 'French79',
        url: 'https://soundcloud.com/french79music/diamond-veins',
        provider: 'Soundcloud'
      },
      {
        id: 3,
        title: 'Inside My Love',
        album: 'album',
        artist: 'Buzz Compass',
        url: 'https://soundcloud.com/buzzcompass/inside-my-love-rework',
        provider: 'Soundcloud'
      },
      {
        id: 4,
        title: 'Session #8 Lydia Birthday',
        album: 'album',
        artist: 'Psychonaut25',
        url: 'https://livesets.com/psychonaut25/session/54483',
        provider: 'Livesets'
      },
      {
        id: 5,
        title: 'All along the Watchtower',
        album: 'album',
        artist: 'Jimmy Hendrix',
        url: 'https://www.youtube.com/embed/TLV4_xaYynY/?autoplay=1?rel=0',
        provider: 'Youtube'
      }
    ])

    const getList = (list) => {
      return items.value.filter((item) => item.list == list)
    }

    const startDrag = (event) => {
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("text/plain", null)
      _el = event.target;
    }

    const onDrop = (event) => {
      const closestLi = event.target.closest('li');

      if (isBefore(_el,closestLi)){
        // good for up sorting
        closestLi.parentNode.insertBefore(_el, closestLi);
      }else{
        // good for down sorting
        closestLi.parentNode.insertBefore(_el, closestLi.nextSibling);
      }
    }

    function isBefore(el1, el2) {
      const indexEl1 = [...el2.parentNode.children].indexOf(el1)
      const indexEl2 = [...el2.parentNode.children].indexOf(el2)

      if (indexEl1 > indexEl2){
        return true;
      } else {
        return false;
      }
    }


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
          console.log('>>>> OK, URL received', data)
          // validate inserted link is either from youtube or from soundcloud
          const isYouTubeUrl = youtubeRegex.test(data)
          const isSoundcloudUrl = soundcloudRegex.test(data)
          
          // create new item in items
          if (isYouTubeUrl){
            // get video ID from url 
            const videoId = data.match(/v=([^&#]+)/)[1]
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YT_API_KEY}`
            
            
            fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                const title = data.items[0].snippet.title
                const artist = data.items[0].snippet.channelTitle

                const cleanArtist = artist.replace('VEVO', '')
                const thumbnailUrl = data.items[0].snippet.thumbnails.high.url

                console.log(thumbnailUrl) 
                console.log(title)  // 'Rick Astley - Never Gonna Give You Up (Video)'
                console.log(cleanArtist) // 'RickAstleyVEVO'

                const newItem = {
                  id: 5,
                  title: title,
                  album: 'Albumname',
                  artist: cleanArtist,
                  url: player_store.getYTPlayer + videoId + '/?autoplay=1',
                  thumbnail: thumbnailUrl,
                  provider: 'Youtube'
                }

                items.value.push(newItem)
              })
              .catch(error => console.error(error))

          
          } else if (isSoundcloudUrl) {
              console.log('Is Soundcloud URL')
              
              const match = soundcloudRegex.exec(data);

              if (match) {
                const artist = match[1];
                const title = match[2];
                console.log(`Artist: ${artist}`);
                console.log(`Title: ${title}`);

                const newItem = {
                  id: 6,
                  title: title,
                  album: 'Albumname',
                  artist: artist,
                  url: data,
                  thumbnail: '',
                  provider: 'Soundcloud'
                }

                items.value.push(newItem)
              }



          }else {
            console.log('dude wrong URL')
          }

      }).onCancel(() => {
          console.log('>>>> Cancel')
      }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
      })
    }

    return { 
      addLink, 
      startDrag,
      onDrop,
      getList,
      store ,
    }
    
  },
  computed: {
    url () {
      return player_store.url
    }
  },
  watch: {
    url: {
      handler (newUrl) {
        this.videoSrc = newUrl
      },
      deep: true
    }
  },
  data () {
    return {
      videoSrc: player_store.currentlyPlaying
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

  .q-drawer {
    transform: translateX(0px);
  }

  .q-page-container{
    padding-left: 200px!important;
  }
</style>
