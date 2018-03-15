import { configure, shallow } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import toJson, { createSerializer } from 'enzyme-to-json'

import ProductRating from './ProductRating'

import ProductStore from '../../ProductStore'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

configure({ adapter: new Adapter() })

describe('ProductRating', () => {
  it('matches snapshot', () => {
    const ProductRatingActiveWrapper = shallow(
      <ProductRating ProductStore={ProductStore} inputIdIndex="100" />
    )

    expect(toJson(ProductRatingActiveWrapper)).toMatchSnapshot()

    const ProductRatingDisabledWrapper = shallow(
      <ProductRating ProductStore={ProductStore} scoreValue="4" />
    )

    expect(toJson(ProductRatingDisabledWrapper)).toMatchSnapshot()
  })
})
