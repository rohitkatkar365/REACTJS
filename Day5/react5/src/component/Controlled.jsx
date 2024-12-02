import React, { useState } from 'react'

function Controlled() {
    const [name,setName] = useState("");
    const handlechange = (e) =>
    {
        setName(e.target.value)
    }
  return (
    <>
        <input type="text" value={name} onChange={handlechange}/>
        <h1>{name}</h1>
    </>
  )
}

export default Controlled