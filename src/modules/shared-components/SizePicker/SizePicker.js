import React from 'react'

const SizePicker = () => {
  return (
    <div className="size-picker">
      <span className="size-picker__title">Size: </span>

      <span className="size-picker__size size-picker__size--out-of-stock">
        37
      </span>
      <span className="size-picker__size size-picker__size--selected">38</span>
      <span className="size-picker__size">39</span>
      <span className="size-picker__size">40</span>
      <span className="size-picker__size">41</span>
      <span className="size-picker__size">42</span>
    </div>
  )
}

export default SizePicker
