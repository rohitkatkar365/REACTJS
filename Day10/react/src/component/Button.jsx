import React, { Component } from 'react';
import { CommonContext } from './CommonContext';

function Button(){
    return (
      <CommonContext.Consumer>
        {({ updateColor }) => (
          // Use parentheses for implicit return
            <button onClick={()=>updateColor("yellow")}>Update Color</button>
)}
      </CommonContext.Consumer>
    );
}

export default Button;
