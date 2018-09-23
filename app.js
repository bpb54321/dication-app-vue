if (jQuery) {
  $ = jQuery;
}

audio_player = document.getElementById('audio-player');
$pause_time_input = $('#pause-time');

const dictation_app = new Vue({
  el: "#dictation-app",
  data: {
    "url": "http://127.0.0.1:8000/media-items/3/",
    "id": 3,
    "title": "Aux affaires étrangères",
    "type": "audio",
    "resource_url": "https://papp.csps-efpc.gc.ca/courses/dept/CSPS/C285/content/section03/audio/bc09.mp3",
    "youtube_id": "",
    media_items: [],
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
  mounted: function() {
    // Load the audio player source
    audio_player.src = this.$data.resource_url;
    audio_player.load();
  },
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
  },

})

const media_item_list = new Vue({
  el: "#media-item-list",
  data: {
    media_items: [
      {
          "url": "http://127.0.0.1:8000/media-items/3/",
          "id": 3,
          "title": "Aux affaires étrangères",
          "type": "audio",
          "resource_url": "https://papp.csps-efpc.gc.ca/courses/dept/CSPS/C285/content/section03/audio/bc09.mp3",
          "youtube_id": ""
      },
      {
          "url": "http://127.0.0.1:8000/media-items/2/",
          "id": 2,
          "title": "Campagne de publicité",
          "type": "audio",
          "resource_url": "https://papp.csps-efpc.gc.ca/courses/dept/CSPS/C285/content/section03/audio/bc08.mp3",
          "youtube_id": ""
      }
    ],
  },
})