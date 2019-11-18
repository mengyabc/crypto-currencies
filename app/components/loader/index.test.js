import React from 'react'
import { shallow } from 'enzyme'

import Loader from './'

describe('Loader component', () => {
  test('Should render correctly', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper).toMatchSnapshot()
  })
})
