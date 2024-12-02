// import PureComponent from "./component/Purecomponent"
// import Purecomponent1 from "./component/Purecomponent1"
// import UseMemo from "./component/UseMemo"
// import ReF from "./component/ReF"// import ReF1 from "./component/ReF1"
// import { useRef } from "react"
// import Controlled from "./component/Controlled"
// import Uncontrolled from "./component/Uncontrolled"
import { useState } from "react";
import HOC from "./component/HOC/HOC"

// import ForwardRef from "./component/ForwardRef"
function App() {
  // const ip = useRef(null);
  // function updateInput()
  // {
  //   ip.current.value = "1000"
  //   ip.current.focus();
  // }
  return (
    <>
      {/* <PureComponent></PureComponent> */}
      {/* <Purecomponent1 cnt={0}></Purecomponent1> */}
      {/* <UseMemo></UseMemo> */}
      {/* <ReF></ReF> */}
      {/* <ReF1></ReF1> */}
      {/* <ForwardRef ref={ip}></ForwardRef> */}
      {/* <button onClick={updateInput}>Update Input Box</button> */}
      {/* <Controlled></Controlled> */}
      {/* <Uncontrolled></Uncontrolled> */}
      {/* <Counter></Counter> */}
      <HOC cmp={<Counter/>}></HOC>
    </>
  )
}

function Counter() {
  const [cnt,setCnt] = useState(0);
return (
  <>
  <h1>{cnt}</h1>
  <button onClick={()=>setCnt(cnt+1)}>Update Count</button>
  </>
)
}
export default App
