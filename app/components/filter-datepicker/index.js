import React, { Fragment, useState } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

const FilterDatepicker = ({ onClick }) => {
  const [date, setDate] = useState('')

  const handleChange = (newDate) => {
    setDate(newDate)
    if (!newDate) onClick('')
  }

  const handleFilter = () => {
    const dateSelected = date ? moment(date).format('YYYYMMDD') : ''
    onClick(dateSelected)
  }

  return (
    <Fragment>
      <DatePicker
        selected={date}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        isClearable
        placeholderText="Click to select a date"
      />
      <button
        type="button"
        className="btn btn-sm btn-filter"
        onClick={handleFilter}
      >Filter
      </button>
    </Fragment>
  )
}

export default FilterDatepicker
