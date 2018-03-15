import React from 'react'

const ColorPicker = () => {
  return (
    <div className="ColorPicker color-picker">
      <p className="color-picker__title">
        Color:
        <span className="color-picker__selected-color color-picker__selected-color--dark-blue">
          DARK BLUE
        </span>
      </p>
      <span className="color-picker__color color-picker__color--dark-blue color-picker__color--selected">
        DB
      </span>
      <span className="color-picker__color color-picker__color--blue">B</span>
      <span className="color-picker__color color-picker__color--gray">Y</span>
      <span className="color-picker__color color-picker__color--black">R</span>
    </div>
  )
}

export default ColorPicker
