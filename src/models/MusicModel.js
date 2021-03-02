import axios from 'axios'

const apiKey = 'cf892ec840mshbebbed8b9d5e796p1dc3fajsn42bd5bf6a740'
const host = 'shazam.p.rapidapi.com'
const resource = `https://${host}/`

axios.interceptors.request.use((config) => {
  config.headers['x-rapidapi-key'] = apiKey
  config.headers['x-rapidapi-host'] = host
  config.headers['useQueryString'] = true
  return config
})

class MusicModel {
  getCharts () {
    return axios({
      method: 'GET',
      url: `${resource}charts/track`
    })
  }
}

export default new MusicModel()
