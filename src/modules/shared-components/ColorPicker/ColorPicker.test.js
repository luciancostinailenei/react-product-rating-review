import React from 'react'
import toJson, { createSerializer } from 'enzyme-to-json'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './ColorPicker'
import ColorPicker from './ColorPicker'

configure({ adapter: new Adapter() })

describe('ProductReview', () => {
  it('matches snapshot', () => {
    const ColorPickerWrapper = shallow(<ColorPicker />)

    expect(toJson(ColorPickerWrapper)).toMatchSnapshot()
  })
})
