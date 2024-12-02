// import React,{useState} from "react"
// import Usestate from "./component/Useeffect"
// import Useeffect from "./component/Useeffect"
// import Bootstrap from "./component/Style/Bootstrap"
// import Style1 from "./component/Style/Style1"
// import Useeffect1 from "./component/Useeffect1"
// import ArrayandList from "./component/ArrayandList"
// import Object from "./component/Object"
// import Table from "./component/Table"

import LiftingState from "./component/LiftingState"

function App() {
  // const [cnt,setCnt] = useState(0);
  function pAlert(data)
  {
    alert(data);
  }
  return (
    <>  
  {/* <Usestate></Usestate> */}
  {/* <Useeffect></Useeffect> */}
  {/* <Useeffect1 cnt={cnt}></Useeffect1>
  <button onClick={()=>setCnt(cnt+1)}>Update Count</button> */}
  {/* <Style1></Style1> */}
  {/* <Bootstrap></Bootstrap> */}
  {/* <ArrayandList></ArrayandList> */}
  {/* <Object></Object> */}
  {/* <Table></Table> */}
  <LiftingState alert={pAlert}></LiftingState>
    </>
  )
}

export default App
