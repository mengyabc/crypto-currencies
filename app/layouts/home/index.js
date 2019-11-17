import React from 'react'
import { connect } from 'react-redux'

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
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
