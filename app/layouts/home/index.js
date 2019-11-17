import React from 'react'
import { connect } from 'react-redux'

import { get_currenct_listing } from 'redux_and_actions/actions'

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
    return (
      <div className="home-layout">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1>Left</h1>
            </div>
            <div className="col-xs-12 col-md-6">
              <h1>Right</h1>
            </div>
          </div>
        </div>
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
