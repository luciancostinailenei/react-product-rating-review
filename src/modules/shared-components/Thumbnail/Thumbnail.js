import React from 'react'

const Thumbnail = props => {
  return (
    <div className="Thumbnail">
      <img
        className={'thumbnail thumbnail--' + props.type}
        src={props.source}
        alt={props.alt}
      />
    </div>
  )
}

export default Thumbnail
