import React, { useEffect, useState } from 'react'

function Useeffect1(props) {
    const [cnt,setCnt] = useState(0);
    useEffect(()=>{
        console.log("UseEffect Called");
    },[props.cnt])
  return (
    <>
        <div style={{display:'grid',justifyContent:'center'}}>
        <h1>{props.cnt}</h1>
        </div>
    </>
  )
}

export default Useeffect1;