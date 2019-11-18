import React from 'react'
import { shallow } from 'enzyme'

import Header from './'

describe('Header component', () => {
  test('Should render correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
