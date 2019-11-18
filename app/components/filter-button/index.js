import React from 'react'

const FilterButton = ({ text, active, onClick, loading }) => (
  <button
    type="button"
    value={text}
    className={'btn btn-filter' + (active ? ' active' : '')}
    onClick={onClick}
    disabled={loading}
  >{ text }
  </button>
)

export default FilterButton
