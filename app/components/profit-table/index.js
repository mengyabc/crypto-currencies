import React from 'react'
import moment from 'moment'

const ProfitTable = ({
  result: {
    currency,
    date,
    buy,
    sell,
    profit,
  } = {},
}) => {
  const buyTimestamp = `${date} ${buy.time}`
  const sellTimestamp = `${date} ${sell.time}`
  return (
    <div className="col-xs-12 col-md-4">
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <td colSpan="2">{moment(buyTimestamp).format('DD-MMMM-YY')}</td>
          </tr>
          <tr>
            <th colSpan="2" className="table-bg">{currency}</th>
          </tr>
          <tr>
            <th>buy</th>
            <th>sell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`$${buy.price}`}</td>
            <td>{`$${sell.price}`}</td>
          </tr>
          <tr>
            <td>{moment(buyTimestamp).format('hh:mm A')}</td>
            <td>{moment(sellTimestamp).format('hh:mm A')}</td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">{`Profit: $${profit}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProfitTable
