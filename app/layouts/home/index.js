import React from 'react'
import { connect } from 'react-redux'

export const getBestProfit = () => ({})

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
