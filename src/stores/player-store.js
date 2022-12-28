import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    yt_embed_link: 'https://www.youtube.com/embed/',

    sc_player: 'https://w.soundcloud.com/player/?url=',
    sc_decorator: '&color=%23ff5500&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true&show_artwork',
    url: ''


  }),
  getters: {
    currentlyPlaying: (state) => state.url,
    getYTPlayer:(state) => state.yt_embed_link,
    getSCPlayer:(state) => state.sc_player,
    
  },
  actions: {
    setUrl ({}, payload) {
      this.url = payload
    }
  }

});
