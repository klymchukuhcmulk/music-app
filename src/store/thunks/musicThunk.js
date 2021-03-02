import MusicModel from '../../models/MusicModel'
import { setCharts } from '../actions'

export const fetchCharts = () => async (dispatch) => {
  try {
    const { data } = await MusicModel.getCharts()
    dispatch(setCharts(data.tracks))
  } catch (e) {
    console.log(e)
  }
}
