import React from 'react'
import { shallow } from 'enzyme'

import ProfitTable from '.'

describe('BestProfit component', () => {
  test('Should render correctly', () => {
    const result = {
      currency: 'BTC',
      date: '20180507',
      buy: {
        time: '0915',
        price: '34.98',
      },
      sell: {
        time: '1230',
        price: '37.01',
      },
      profit: '2.03',
    }
    const wrapper = shallow(<ProfitTable result={result} />)
    expect(wrapper).toMatchSnapshot()
  })
})
