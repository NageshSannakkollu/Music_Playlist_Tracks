import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const TracksItem = props => {
  const {trackDetails, onDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const deleteTrack = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="play-list-container">
      <div className="image-track-type-container">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="name-genre-container">
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p>{duration}</p>
        <button
          type="button"
          className="delete-button"
          onClick={deleteTrack}
          data-testid="delete"
        >
          <RiDeleteBin7Line className="delete-image" />
        </button>
      </div>
    </li>
  )
}

export default TracksItem
