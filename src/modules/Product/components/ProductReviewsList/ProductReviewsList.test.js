import { configure, shallow } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'mobx-react'
import 'jsdom-global/register'
import toJson, { createSerializer } from 'enzyme-to-json'

import ProductReviewsList from './ProductReviewsList'

import ProductStore from '../../ProductStore'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

configure({ adapter: new Adapter() })

describe('ProductReviewsList', () => {
  it('matches snapshot', () => {
    const ProductReviewsListWrapper = shallow(
      <ProductReviewsList ProductStore={ProductStore} />
    )

    expect(toJson(ProductReviewsListWrapper)).toMatchSnapshot()
  })

  it('reacts to store changes', function() {
    ProductStore.addReview({
      rating: 5,
      title: 'Test Review Title 1',
      text: 'Review Text Test 1',
      user: 'Lucian',
      date: new Date()
    })

    const ProductReviewsListWrapper = shallow(
      <ProductReviewsList ProductStore={ProductStore} />
    )

    expect(
      ProductReviewsListWrapper.dive()
        .find('.ProductReviewsList__average-score')
        .text()
    ).toBe('5')

    expect(
      ProductReviewsListWrapper.dive()
        .find('.ProductReviewsList__reviews-number b')
        .text()
    ).toBe('1')
  })
})
