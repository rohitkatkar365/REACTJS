import React, { useState } from "react";

function Toggle() {
  const [Status, setStatus] = useState(true);
  return (
    <>
      {!Status ? <div>Toggle</div> : null}

      <button onClick={() => setStatus(Status ? false : true)}>
        {Status ? "Show" : "Hide"}
      </button>
    </>
  );
}

export default Toggle;
