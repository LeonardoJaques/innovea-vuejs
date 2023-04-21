import axios from 'axios'

// Get your own API key at https://newsapi.org/

const API_KEY = '8a969863166f49eb8773bf1d30302894'
const API_BASE_URL = 'newsapi.org/v2'
// const API_BASE_URL = 'https://pokeapi.co/api/v2/'
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'X-Api-Key': API_KEY,
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
}
const api = axios.create({ baseURL: `${corsProxyUrl}${API_BASE_URL}`, ...options })

export default api
