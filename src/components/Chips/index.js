import React from 'react'

import chip1 from './poker-chip.svg'
import chip2 from './poker-chip-1.svg'
import chip3 from './poker-chip-2.svg'
import './index.css'

const chipsVals = [
  {
    val: 100,
    color: '#000',
    img: chip1
  },
  {
    val: 200,
    color: 'orange',
    img: chip2
  },
  {
    val: 500,
    color: 'purple',
    img: chip3
  },
]

const Chips = ({ handleChooseBet }) => {

  return (
    <div>
      <span className="bets-title">Place your bet</span>
      <div className="chips-area">
        {chipsVals.map((item, idx) => (
          <div key={idx} className="chips" onClick={()=>handleChooseBet(item.val)}>
            <img src={item.img} style={{fill: item.color}} className="chip" alt="chip" />
            <span className="bet-amount">{item.val}</span>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Chips
