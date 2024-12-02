    import React, { createRef } from 'react'

    function Uncontrolled() {
        const ip = createRef(null);
        function getval()
        {
            ip.current.style.color='red'
        }
    return (
        <>
            <input type="text" ref={ip}/>
            <button onClick={()=>getval()}>Get val</button>
        </>
    )
    }

    export default Uncontrolled;