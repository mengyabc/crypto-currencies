import React from 'react'
import { shallow } from 'enzyme'

import PriceTable from './'

describe('PriceTable component', () => {
  test('Should render correctly', () => {
    const items = [{
      currency: 'BTC',
      date: '20180507',
      quotes: [{
        time: '0915',
        price: '34.98',
      },
      {
        time: '1045',
        price: '36.13',
      },
      {
        time: '1230',
        price: '37.01',
      },
      {
        time: '1400',
        price: '35.98',
      },
      {
        time: '1530',
        price: '33.56',
      },
      ],
    }]
    const wrapper = shallow(<PriceTable items={items} />)
    expect(wrapper).toMatchSnapshot()
  })
})
