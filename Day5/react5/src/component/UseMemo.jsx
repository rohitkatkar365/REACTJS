import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [cnt, setCnt] = useState(0);
  const [item, setItem] = useState(1);

  const mt = useMemo(() => {
    console.log('Recalculating mt...');
    return cnt + 2;
  }, [item]); 
  return (
    <>
      <h1>Count: {cnt}</h1>
      <h1>Item: {item}</h1>
      <h1>Memoized Value (mt): {mt}</h1>
      <button onClick={() => setCnt(cnt + 1)}>Update Count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
    </>
  );
}

export default UseMemo;
