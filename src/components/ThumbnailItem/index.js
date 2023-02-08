import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onSelectImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onChangeImg = () => {
    onSelectImg(id)
  }

  const opacity = isActive ? '' : 'opacity'

  return (
    <li className="list_item">
      <button type="button" onClick={onChangeImg} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${opacity}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
