import React from 'react'
import toJson, { createSerializer } from 'enzyme-to-json'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './SizePicker'
import SizePicker from './SizePicker'

configure({ adapter: new Adapter() })

describe('ProductReview', () => {
  it('matches snapshot', () => {
    const SizePickerWrapper = shallow(<SizePicker />)

    expect(toJson(SizePickerWrapper)).toMatchSnapshot()
  })
})
