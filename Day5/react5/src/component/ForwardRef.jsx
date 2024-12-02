import React, { forwardRef } from 'react'

function ForwardRef(props,ref) {
  return (
    <>
    <input type="text" ref={ref}/>
    </>
  )
}

export default forwardRef(ForwardRef);