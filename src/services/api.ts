import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gomailer.vmotta.dev',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
