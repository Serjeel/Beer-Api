import { useHistory } from "react-router-dom";
import { useCallback } from "react";

import './BeerCard.css'

const BeerCard = ({ name, image, id }) => {
  let history = useHistory();

  const goToDescription = useCallback(() => {
    history.push(`&beer=${id}`)
  }, [])

  return (
    <div className='beer-card' id={id + 1} onClick={goToDescription}>
      <img
        className='beer-image'
        src={image}
        alt={name}
      />
      <div className='beer-name'>
        <span className='beer-name-text'>{name}</span>
      </div>
    </div>
  )
}

export default BeerCard