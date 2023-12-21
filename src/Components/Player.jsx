import React, { useState } from 'react'

function Player({name,symbol}) {
    const [isEditing,setisEditing]=useState(false);
function handleclick(){
    setisEditing(true);
}
  return (
    <li>
        <span className='player'>
       {isEditing ? <input /> :<span className="player-name">{name}</span>} 
{isEditing ? <input />:<span className="player-symbol">{symbol}</span>}
        </span>
      
<button onClick={handleclick}>Edit</button>
    </li>
  )
}

export default Player
