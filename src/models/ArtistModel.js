import axios from 'axios'
import shazamConfig from '../config/shazam.config'

axios.interceptors.request.use((config) => {
  config.headers['x-rapidapi-key'] = shazamConfig.apiKey
  config.headers['x-rapidapi-host'] = shazamConfig.host
  config.headers['useQueryString'] = true
  return config
})

class ArtistModel {
  helpSearch ({ term }) {
    return axios({
      method: 'GET',
      url: `${shazamConfig.resource}songs/list-artist-top-tracks`,
      params: {
        term
      }
    })
  }
}

export default new ArtistModel()
