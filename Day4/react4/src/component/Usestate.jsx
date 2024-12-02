import React,{useState} from 'react';

function Usestate()
{
    const [name,setName] = useState("Ram");
    return(
        <>
            <div style={{display:'grid',justifyContent:'center'}}>
            <h1>{name}</h1>
            <button onClick={()=>setName("Rohit")}>Update Name</button>
            </div>
        </>
    )
}
export default Usestate;