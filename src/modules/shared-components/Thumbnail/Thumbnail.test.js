import React from 'react'
import toJson, { createSerializer } from 'enzyme-to-json'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './Thumbnail'
import Thumbnail from './Thumbnail'

configure({ adapter: new Adapter() })

describe('ProductReview', () => {
  it('matches snapshot', () => {
    const ThumbnailWrapper = shallow(<Thumbnail />)

    expect(toJson(ThumbnailWrapper)).toMatchSnapshot()
  })
})
