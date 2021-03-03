import Button from '../Button/Button'

import './SongCard.scss'

const SongCard = ({ song }) => {
  const goToSong = () => {
    console.log(song)
  }

  return (
    <section className="music-song-card">
      <div
        className="music-song-card__artwork"
        style={{backgroundImage: `url(${song.images.coverart})`}}
      >
      </div>
      <div className="music-song-card__info">
        <header className="music-song-card__header">
          <h1 className="music-song-card__info__title">{song.title}</h1>
          <p className="music-song-card__info__subtitle">{song.subtitle}</p>
        </header>
        <div className="music-song-card__info__buttons">
          <Button onClick={goToSong}> MUSIC</Button>
        </div>
      </div>
    </section>
  )
}

export default SongCard
