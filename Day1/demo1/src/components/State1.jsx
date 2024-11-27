import React from "react";

class State1 extends React.Component{
    constructor()
    {
        super();
        this.state={
            cnt:1
        }
    }
    update()
    {
        this.setState({cnt:this.state.cnt+1})
    }
    render(){
    return(
        <>
            <h1>Count :- {this.state.cnt}</h1>
            <button onClick={()=>this.update()}>Update</button>
        </>
    )
}
}

export default State1;