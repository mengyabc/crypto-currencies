import React from 'react'
import { connect } from 'react-redux'

import { get_currenct_listing } from 'redux_and_actions/actions'
import PriceTable from 'components/price-table'
import FilterButton from 'components/filter-button'
import Loader from 'components/loader'

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
    this.state = {
      currencyFilter: 'All',
      loading: true,
    }
    // Assuming we have filter API returned with following data
    this.currencyFilter = ['All', 'BTC', 'ETC', 'LTC']
  }

  componentDidMount() {
    this.props.get_currenct_listing({})
  }

  componentDidUpdate(prevProps) {
    if (this.props.currencies !== prevProps.currencies) {
      this.setState({ loading: false })
    }
  }

  filterCurrencies = (event) => {
    const value = event.target.value
    this.setState({
      currencyFilter: value,
      loading: true,
    })
    this.props.get_currenct_listing({ currency: value === 'All' ? '' : value })
  }

  render() {
    const { currencies } = this.props
    const { loading, currencyFilter } = this.state

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
        {
          currencies.length !== 0 &&
          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-4">
              <div className="btn-group btn-group-lg" role="group" aria-label="Filter">
                {
                  this.currencyFilter.map(filter => (
                    <FilterButton
                      key={filter}
                      text={filter}
                      active={currencyFilter === filter}
                      onClick={this.filterCurrencies}
                      loading={loading}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        }
        { loading && <Loader /> }
        {
          !loading &&
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="row-title">Best Profit</h2>
              </div>
              <div className="col-12">
                <h2 className="row-title">Price Chart</h2>
                <PriceTable items={currencies} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currencies: state.home.currencies }
}

function mapDispatchToProps(dispatch) {
  return { get_currenct_listing: data => dispatch(get_currenct_listing(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
