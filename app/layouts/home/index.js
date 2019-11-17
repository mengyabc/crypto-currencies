import React from 'react'
import { connect } from 'react-redux'

import { get_currenct_listing } from 'redux_and_actions/actions'
import PriceTable from 'components/price-table'
import Loader from 'components/Loader'

export const getBestProfit = (data) => {
  const quotes = data.quotes || []
  let maxprofit = 0
  let minprice = Number.MAX_VALUE
  let buy
  let sell
  let mintime
  quotes.forEach((quote) => {
    if (quote.price < minprice) {
      minprice = quote.price
      mintime = quote.time
    } else if (quote.price - minprice > maxprofit) {
      maxprofit = quote.price - minprice
      buy = {
        price: minprice,
        time: mintime,
      }
      sell = {
        price: quote.price,
        time: quote.time,
      }
    }
  })
  return {
    currency: data.currency,
    date: data.date,
    buy,
    sell,
    profit: maxprofit.toFixed(2),
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.get_currenct_listing()
  }

  render() {
    const { currencies } = this.props
    return (
      <div className="home">
        <div className="home-title">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>My Crypto Currencies</h1>
              </div>
            </div>
          </div>
        </div>
        { currencies.length === 0 && <Loader /> }
        {
          currencies.length !== 0 &&
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="row-title">Best Profit</h2>
              </div>
              <div className="col-12">
                <h2 className="row-title">Price Chart</h2>
                <PriceTable items={this.props.currencies} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.home.currencies,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    get_currenct_listing: data => dispatch(get_currenct_listing(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
