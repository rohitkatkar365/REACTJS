import React,{useRef} from 'react'

function ReF1() {
    const ip = useRef(null);
    function getval()
    {
        ip.current.style.color='red'
        alert(ip.current.value);
    }
  return (
    <>
        <input type="text" ref={ip}/>
        <button onClick={getval}>Get Value</button>
    </>
  )
}

export default ReF1