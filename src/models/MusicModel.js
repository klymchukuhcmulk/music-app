import axios from 'axios'
import shazamConfig from '../config/shazam.config'

axios.interceptors.request.use((config) => {
  config.headers['x-rapidapi-key'] = shazamConfig.apiKey
  config.headers['x-rapidapi-host'] = shazamConfig.host
  config.headers['useQueryString'] = true
  return config
})

class MusicModel {
  getCharts () {
    return axios({
      method: 'GET',
      url: `${shazamConfig.resource}charts/track`
    })
  }
  search ({ term, limit = 5, offset = 0}) {
    return axios({
      method: 'GET',
      url: `${shazamConfig.resource}search`,
      params: {
        term,
        limit,
        offset
      }
    })
  }
  helpSearch ({ term }) {
    return axios({
      method: 'GET',
      url: `${shazamConfig.resource}auto-complete`,
      params: {
        term
      }
    })
  }
}

export default new MusicModel()
