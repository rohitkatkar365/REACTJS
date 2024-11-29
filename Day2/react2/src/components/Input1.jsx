import { useState } from "react";
function Input1() {
  const [val, setVal] = useState(null);
  const [print, setprint] = useState(false);
  function getVal(val) {
    // console.log(val.target.value);
    setVal(val.target.value);
  }
  return (
    <>
      <p>{print ? val : null}</p>
      <input type="text" onChange={getVal} />
      <button onClick={()=>setprint(true)}>GetVal</button>
    </>
  );
}
export default Input1;
