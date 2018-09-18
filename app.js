const dictation_app = new Vue({
  el: "#dictation-app",
  data: {
    "url": "http://127.0.0.1:8000/media-items/3/",
    "id": 3,
    "title": "Aux affaires étrangères",
    "type": "audio",
    "resource_url": "https://papp.csps-efpc.gc.ca/courses/dept/CSPS/C285/content/section03/audio/bc09.mp3",
    "youtube_id": "",
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