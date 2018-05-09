import axios from 'axios'
import qs from 'qs'
const API = axios.create({
  baseURL: 'index.php/',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  method: 'post',
  transformRequest: [
    function(data) {
      return qs.stringify(data)
    }
  ]
})

export default API
