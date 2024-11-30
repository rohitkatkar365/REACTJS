// import React,{useState} from "react"
// import Constructor from "./component/Constructor"
// import Render from "./component/Render"
// import Render1 from "./component/Render1"
// import ComponentDidMount from "./component/ComponentDidMount"
// import ComponentDidUpdate from "./component/ComponentDidUpdate"
// import ShouldComponetUpdate from "./component/shouldComponetUpdate"

import ComponetWillUnmount from "./component/ComponetUnMount"

function App() {
  // const [cnt,setCnt] = useState(0);
  return (
    <>
      {/* <Constructor></Constructor> */}
      {/* <Render cnt={cnt}></Render>
      <button onClick={()=>setCnt(cnt+1)}>Update Count</button> */}
      {/* <Render1></Render1> */}
      {/* <ComponentDidMount></ComponentDidMount> */}
      {/* <ComponentDidUpdate></ComponentDidUpdate> */}
      {/* <ShouldComponetUpdate></ShouldComponetUpdate> */}
      <ComponetWillUnmount></ComponetWillUnmount>
    </>
  )
}

export default App
