if (jQuery) {
  $ = jQuery;
}

audio_player = document.getElementById('audio-player');
$pause_time_input = $('#pause-time');

const dictation_app = new Vue({
  el: "#dictation-app",
  data: {
    app_title: "Dictation App",
    media_items: [
      {
        title: "Item 1",
        url: "",
      },
      {
        title: "Item 2",
        url: "",
      },
    ],
    current_media_item: {
      url: "",
      id: 0,
      title: "",
      type: "",
      resource_url: "",
      youtube_id: "",
      clips: [],
      clip_index: 0,
    },
    current_clip: {},
    pause_time: 10, // seconds
  },
  beforeCreate: function() {
    // Save a pointer to the vue instance for use in the AJAX callback
    let vue_instance = this;

    // Get list of media items from API
    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:8000/media-items/",
      success: function(data) {
        vue_instance.$data.media_items = data;
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
        console.log(errorThrown);
      },
    });
  },
  // mounted: function() {
  //   // Load the audio player source
  //   audio_player.src = this.$data.resource_url;
  //   audio_player.load();
  // },
  methods: {
    startStopLooping: function() {
      // if (this.$data.is_playing) {
      //   audio_player.pause();
      // } else {
        audio_player.play();
      //   let pause_time = $pause_time_input.val();
      //   let timer = setTimeout(function() {}, pause_time)
      // }

    },
    loadMediaItem: function(media_item_endpoint) {
      let vue_instance = this;
      $.ajax({
        method: "GET",
        url: media_item_endpoint,
        success: function(media_item) {
          let $data = vue_instance.$data;
          $data.current_media_item = media_item;
          $data.current_media_item.clip_index = 0;
          $data.current_clip = $data.current_media_item.clips[$data.current_media_item.clip_index];
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
          console.log(errorThrown);
        },
      });
    },
    changeClip: function(clip_index) {
      let number_of_clips = this.$data.current_media_item.clips.length;
      if (clip_index < 0) {
        clip_index = 0;
      } else if (clip_index >= number_of_clips) {
        clip_index = number_of_clips - 1;
      }
      this.$data.current_media_item.clip_index = clip_index;
      this.$data.current_clip = this.$data.current_media_item.clips[clip_index];
    }
  },

})
