
import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import mockStore from 'redux-mock-store'

import Home, { getBestProfit } from './'

describe('Home component', () => {
  test('Should render correctly', () => {
    const store = {
      home: {},
    }
    const home = shallow(
      <Provider store={mockStore(store)}>
        <Home />
      </Provider>,
    )
    expect(home).toMatchSnapshot()
  })
})

describe('getBestProfit', () => {
  test('Should give the best profit that can be made, given price list of one currency of the same day', () => {
    const currency = {
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
      }],
    }
    const expected = {
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
      profit: 2.03,
    }
    expect(getBestProfit(currency)).toEqual(expected)
  })
})
