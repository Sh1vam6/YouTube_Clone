import axios from 'axios'

const request = axios.create({
   baseURL: ' https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: "AIzaSyBiWNLHT7SU9ilKR73urp0TspYd_TlmKIQ",
   },
})

export default request