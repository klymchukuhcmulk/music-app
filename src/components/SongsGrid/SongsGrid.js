import SongCard from '../SongCard/SongCard'

import './SongsGrid.scss'

const SongsGrid = ({ songs }) => {

  return (
    <section className="music-songs-grid">
      {songs.map(song => <SongCard song={song} />)}
    </section>
  )
}

export default SongsGrid
