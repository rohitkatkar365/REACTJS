import React from 'react'
import { useSearchParams,useLocation } from 'react-router-dom'

function Filter() {
    const [searchParams,setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    const location = useLocation();
    console.log(location);
    
  return (
    <>
        <div>Filter</div>
        <h2>Age : {age}</h2>
        <h2>CIty : {searchParams.get('city')}</h2>
        <input type="text" onChange={(e)=>setSearchParams({age:e.target.value})} />
        <button onClick={()=>setSearchParams({age:40})}>Set Age</button>
    </>
  )
}

export default Filter