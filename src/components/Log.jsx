import React from 'react'

const Log = ({turns}) => {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        const {square, player} = turn;
        const {row, col} = square;
        return (
            <li key={`${turn.square.row}-${turn.square.col}`}>
              {player} selected {row+1}:{col+1}
            </li>
        )
      })}
    </ol>
  )
}

export default Log