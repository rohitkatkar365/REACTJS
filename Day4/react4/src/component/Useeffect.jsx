import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [cnt,setCnt] = useState(0);
    const [cnt1,setCnt1] = useState(0);
    useEffect(()=>{
        console.log("UseEffect Called");
    },[])
  return (
    <>
        <div style={{display:'grid',justifyContent:'center'}}>
        <h1>{cnt}</h1>
        <h2>{cnt1}</h2>
        <button onClick={()=>setCnt(cnt+1)}>Update Count</button>
        <button onClick={()=>setCnt1(cnt1+1)}>Update Count</button>
        </div>
    </>
  )
}

export default Useeffect;