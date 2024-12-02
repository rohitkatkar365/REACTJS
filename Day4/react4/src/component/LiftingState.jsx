import React from 'react'

function LiftingState(props) {
    const data = "Virat Kohli"
  return (
    <>
        <div>
            <h2>LiftingState Component</h2>
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    </>
  )
}

export default LiftingState