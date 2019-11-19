import React from 'react'
import { shallow } from 'enzyme'

import FilterDatepicker from './'

describe('FilterDatepicker component', () => {
  test('Should render correctly', () => {
    const wrapper = shallow(<FilterDatepicker />)
    expect(wrapper).toMatchSnapshot()
  })
})
