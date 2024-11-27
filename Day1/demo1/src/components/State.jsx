import React,{useState} from "react";
// In vaiable case, component not rerender because we use state or props
function State(){   
    const [cnt,setCnt] = useState(0);
    function click()
    {
        setCnt(cnt+1);
    }
    return(
        <>
            <h2>Hello {cnt}</h2>
            <button onClick={click}>click</button>
        </>
    )
}

export default State;