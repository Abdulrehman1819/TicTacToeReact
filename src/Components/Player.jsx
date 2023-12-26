import React, { useState } from 'react'

function Player({name,symbol}) {
    const [isEditing,setisEditing]=useState(false);
    const [Playername,setPlayername]=useState(name);
function handleclick(){
    setisEditing(editing=>!editing);
}
function handlechange(e){
  setPlayername(e.target.value)
}
  return (
    <li>
        <span className='player'>
       {isEditing ? <input required value={Playername} onChange={handlechange}/> :<span className="player-name">{Playername}</span>} 
       {/* {isEditing ? <input />:<span className="player-symbol">{symbol}</span>} */}
       <span className='player-symbol'>{symbol}</span>
        </span>
      
<button onClick={handleclick}>{isEditing?'Save':'Edit'}</button>
    </li>
  )
}

export default Player
