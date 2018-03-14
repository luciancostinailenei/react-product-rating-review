import { configure, shallow } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import toJson, { createSerializer } from 'enzyme-to-json'

import ProductReview from './ProductReview'

import ProductStore from '../../ProductStore'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

configure({ adapter: new Adapter() })

describe('ProductReview', () => {
  it('matches snapshot', () => {
    const mockReviewData = {
      rating: 5,
      title: 'Test Review Title 1',
      text: 'Review Text Test 1',
      user: 'Lucian',
      date: 'Wed Mar 14 2018 18:58:29 GMT+0200 (GTB Standard Time)'
    }

    const ProductReviewsWrapper = shallow(
      <ProductReview
        ProductStore={ProductStore}
        reviewData={mockReviewData}
        key={'1'}
        index={'1'}
      />
    )

    expect(toJson(ProductReviewsWrapper)).toMatchSnapshot()
  })

  it('renders accordingly based on given props', () => {
    const mockReviewData = {
      rating: 5,
      title: 'Test Review Title 1',
      text: 'Review Text Test 1',
      user: 'Lucian',
      date: 'Wed Mar 14 2018 18:58:29 GMT+0200 (GTB Standard Time)'
    }

    const ProductReviewWrapper = shallow(
      <ProductReview
        ProductStore={ProductStore}
        reviewData={mockReviewData}
        key={'1'}
        index={'1'}
      />
    )

    expect(ProductReviewWrapper.find('.ProductReview__title').text()).toBe(
      'Test Review Title 1'
    )

    expect(ProductReviewWrapper.find('.ProductReview__user-name').text()).toBe(
      'Lucian'
    )

    expect(ProductReviewWrapper.find('.ProductReview__date').text()).toBe(
      '14/03/2018'
    )

    expect(ProductReviewWrapper.find('.ProductReview__text').text()).toBe(
      'Review Text Test 1'
    )
  })
})
