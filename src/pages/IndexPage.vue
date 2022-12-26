<template>
  <q-page class="flex">
    <div class="row" style="width:100%">
      <div class="col-2">
        Left Panel
      </div>
      <div class="col-8" style="background-color:#E1E1E1">
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/TLV4_xaYynY"
        />
      </div>
      <div class="col-2">
        Right Panel
      </div>
    </div>
    <!-- <q-list>  
        <essential-link
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
    </q-list> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import EssentialLink from '../components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'IndexPage',
  components: {
    //EssentialLink
  },
  data () {
    return {
      essentialLinks: linksData
    }
  }
})
</script>
