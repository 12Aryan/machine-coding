import React from 'react'

const ButtonComponent = ({btnName, setMessage}) => {
  return (
<button onClick={()=>setMessage((prevState)=>[ ...prevState,btnName])} >{btnName}</button>
)
}

export default ButtonComponent