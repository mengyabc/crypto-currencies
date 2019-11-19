/* eslint-disable array-callback-return */
import React from 'react'
import moment from 'moment'

const PriceTable = ({ items }) => (
  <table className="table table-responsive-sm">
    <thead>
      <tr>
        <th scope="col">Currency</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      {
        items.map(item => item.quotes.map((quote) => {
          const timestamp = `${item.date} ${quote.time}`
          return (
            <tr key={timestamp}>
              <td>{item.currency}</td>
              <td>{moment(timestamp).format('YYYY-MM-DD')}</td>
              <td>{moment(timestamp).format('hh:mm A')}</td>
              <td>{`$${quote.price}`}</td>
            </tr>
          )
        }))
      }
    </tbody>
  </table>
)

export default PriceTable
