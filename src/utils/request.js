import axios from 'axios'

const service = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede',
  timeout: 50000
})
// process.env.VUE_APP_BASE_API
export default service
