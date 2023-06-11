import axios from 'axios'

const request = axios.create({
   baseURL: ' https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: "AIzaSyCQe9SsdLoP75wQjjJM_rK6HZNhkPL5fX4",
   },
})

export default request