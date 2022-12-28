import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    yt_embed_link: 'https://www.youtube.com/embed/',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344277146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'

  }),
  getters: {
    currentlyPlaying: (state) => state.url,
    getYTPlayer:(state) => state.yt_embed_link,
  },
  actions: {
    setUrl ({}, payload) {
      this.url = payload
    }
  }

});
