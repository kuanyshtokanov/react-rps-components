import React, { useState, useEffect } from 'react'

import { options } from '../../consts/options'
import './index.css'

const OpponentHand = ({ hand }) => {
  const [option, setOption] = useState(null)

  useEffect(() => {
    setOption(options.find(option=>option.val===hand))
  }, [hand])

  return (
    <div className="computer-response">
      {option && option.comp && (
        <>
        <span>
          Computer:
        </span>
        <div className="computer-option">
          <option.comp className='response-icon'/>
        </div>
        </>
      )}
    </div>
  )
}

export default OpponentHand