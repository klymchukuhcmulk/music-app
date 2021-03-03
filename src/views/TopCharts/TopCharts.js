import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharts } from '../../store/thunks/musicThunk'
import { selectCharts } from '../../store/selectors/music'
import SongsGrid from '../../components/SongsGrid/SongsGrid'

import './TopCharts.scss'

const TopCharts = () => {
  const dispatch = useDispatch()
  const chartTracks = useSelector(selectCharts)
  useEffect(() => {
    dispatch(fetchCharts())
  }, []) // eslint-disable-line
  return (
    <section className="music-top-charts">
      <header className="music-top-charts__header">
        <h2>Top charts</h2>
      </header>
      <SongsGrid songs={chartTracks}/>
    </section>
  )
}

export default TopCharts
