// import Input1 from "./components/Input1"

import Function from "./components/Function";

// import Condition from "./components/Condition"
// import Form from "./components/Form"

// import Toggle from "./components/Toggle"

function App() {
  function msg()
  {
    alert("Hi");
  }
  return (
    <>
      {/* <Input1></Input1> */}
      {/* <Toggle></Toggle> */}
      {/* <Form></Form> */}
      {/* <Condition></Condition> */}
      <Function fn={msg}></Function>
    </>
  );
}

export default App;
