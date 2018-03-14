import React from 'react'
import ReactDOM from 'react-dom'

it('tests addition', () => {
  expect(
    (() => {
      return 1 + 1
    }).toBe(2)
  )
})
