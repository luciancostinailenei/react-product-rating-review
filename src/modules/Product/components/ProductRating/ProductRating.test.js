import { configure, mount, shallow } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import toJson, { createSerializer } from 'enzyme-to-json'

import ProductRating from './ProductRating'

import ProductStore from '../../ProductStore'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

configure({ adapter: new Adapter() })

describe('ProductRating', () => {
  it('matches snapshot on both active and disabled states', () => {
    const ProductRatingActiveWrapper = shallow(
      <ProductRating ProductStore={ProductStore} inputIdIndex="100" />
    )

    expect(toJson(ProductRatingActiveWrapper)).toMatchSnapshot()

    const ProductRatingDisabledWrapper = shallow(
      <ProductRating
        ProductStore={ProductStore}
        inputIdIndex="1"
        scoreValue={4}
      />
    )

    expect(toJson(ProductRatingDisabledWrapper)).toMatchSnapshot()
  })

  it('checks stars on user interaction', () => {
    const ProductRatingActiveWrapper = shallow(
      <ProductRating
        ProductStore={ProductStore}
        inputIdIndex="100"
        changeRatingHandler={() => 1}
      />
    ).dive()

    let firstStar = ProductRatingActiveWrapper.find(
      '#ProductRating__input-100-1'
    )

    firstStar.prop('onChange')()

    ProductRatingActiveWrapper.update()

    firstStar = ProductRatingActiveWrapper.find('#ProductRating__input-100-1')

    expect(firstStar.prop('checked')).toEqual(true)
  })

  it('displays checked stars based on given score prop value', () => {
    const ProductRatingDisabledWrapper = shallow(
      <ProductRating
        ProductStore={ProductStore}
        inputIdIndex="1"
        scoreValue={1}
      />
    )

    ProductRatingDisabledWrapper.update()

    expect(
      ProductRatingDisabledWrapper.dive()
        .find('#ProductRating__input-1-1')
        .prop('checked')
    ).toEqual(true)
  })
})
