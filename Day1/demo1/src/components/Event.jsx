function Event() {
  function clicked() {
    alert("Clicked");
  }
  return (
    <>
      <button onClick={clicked}>Click Me</button>
      {/* <button onClick={()=>{alert("click")}}>Click Me</button> */}
      {/* <button onClick={()=>{clicked()}}>Click Me</button> */}
    </>
  );
}

export default Event;
