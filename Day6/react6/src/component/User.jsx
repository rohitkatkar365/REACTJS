import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
  let params = useParams();
  let {name} = params;
  return (
    <div>User : {name}</div>
  )
}

export default User