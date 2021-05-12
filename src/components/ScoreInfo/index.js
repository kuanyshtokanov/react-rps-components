import React from 'react'

import './index.css'

const ScoreInfo = ({ label, value }) => {
  return (
    <div className="table-stats">
      <span className="bets-label">
        {label}
      </span>
      <span className="bets-val">
        {value}
      </span>
    </div>
  )
}

export default ScoreInfo
