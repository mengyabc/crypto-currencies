import React from 'react'
import { mount } from 'enzyme'

import FilterButton from './'

describe('PriceTable component', () => {
  test('Should render correctly', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      <FilterButton
        text="button"
        active
        onClick={onClick}
        loading={false}
      />,
    )
    expect(wrapper).toMatchSnapshot()
    wrapper.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  test('Should be disabled when loading', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      <FilterButton
        text="button"
        active
        onClick={onClick}
        loading
      />,
    )
    expect(wrapper).toMatchSnapshot()
    wrapper.find('button').simulate('click')
    expect(onClick).not.toBeCalled()
  })
})
