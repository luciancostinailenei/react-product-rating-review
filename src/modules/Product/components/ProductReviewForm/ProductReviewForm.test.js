import { configure, shallow } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import toJson, { createSerializer } from 'enzyme-to-json'

import ProductReviewForm from './ProductReviewForm'

import ProductStore from '../../ProductStore'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

configure({ adapter: new Adapter() })

describe('ProductReviewForm', () => {
  it('matches snapshot', () => {
    const ProductReviewsWrapper = shallow(
      <ProductReviewForm ProductStore={ProductStore} />
    )

    expect(toJson(ProductReviewsWrapper)).toMatchSnapshot()
  })
})
