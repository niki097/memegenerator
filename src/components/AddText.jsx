import React, { useState } from 'react'
import Draggable from "react-draggable"
import "../pages/memecardstyle.css"
function AddText() {
  const[editMode, setEditMode]=useState(false)
 const[val, setVal]=useState("double click to edit") 
 return (
    <Draggable>
      {editMode? (<input onDoubleClick={(e)=>setEditMode(false)} value={val} onChange={(e)=>setVal(e.target.value)}/>):
      (<h1 className='textSize' onDoubleClick={(e)=>setEditMode(true)}>
        {val}
      </h1>)}
    </Draggable>
  )
}

export default AddText