import React from 'react';

function HOC(props) {
  return (
    <>
      <h2>Enhanced Component:</h2>
      {props.cmp} 
    </>
  );
}

export default HOC;
