import React, { useState,useEffect } from 'react'

import { options } from '../../consts/options'
import './index.css'

const GameActions = ({ gameId, handleChooseHand, hand, status }) => {
  const [isChosen, setIsChosen] = useState(null)
  useEffect(() => {
    setIsChosen(hand)
  }, [hand])

  const handleChooseAction = option => {
    if(status !== 'finished'){
      setIsChosen(option)
      handleChooseHand(option, gameId)
    }
  }

  return (
    <div className="action-icons">
      {options.map((option, idx)=>(
        <option.comp className={isChosen===option.val ? 'icon-selected' : 'icons'} key={idx} onClick={() => handleChooseAction(option.val)}/>
      ))}
    </div>
  )
}

export default GameActions
