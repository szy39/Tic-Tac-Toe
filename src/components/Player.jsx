import React from 'react'
import { useState } from 'react'
const Player = ({name, symbol}) => {

const [isEditing, setIsEditing] = useState(false)

 const toggleEdit=() => {
    setIsEditing(!isEditing)
 }

  return (
    <li>
        <span className="player">
        {isEditing ? <input type='text' required /> : <span className="player-name">{name}</span>}
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </li>
  )
}

export default Player