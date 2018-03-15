import React from 'react'
import toJson, { createSerializer } from 'enzyme-to-json'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './SpecificationsList'
import SpecificationsList from './SpecificationsList'

configure({ adapter: new Adapter() })

describe('ProductReview', () => {
  it('matches snapshot', () => {
    const SpecificationsListWrapper = shallow(<SpecificationsList />)

    expect(toJson(SpecificationsListWrapper)).toMatchSnapshot()
  })
})
