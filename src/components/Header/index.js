import React from 'react'

import './index.css'

const Header = ({balance}) => {
  return (
    <div className="container">
      <header className="header">
        <span className="balance-label">
          BALANCE
        </span>
        <span className="balance-value">
          {balance}
        </span>
      </header>
    </div>
  )
}

export default Header
