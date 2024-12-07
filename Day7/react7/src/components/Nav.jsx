import {Link} from 'react-router-dom'

import React from 'react'

function Nav() {
  return (
    <>
        <div>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        </div>
    </>
  )
}

export default Nav