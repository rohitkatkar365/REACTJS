import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams(); // Access the 'id' parameter from the route

  return (
    <div>User {id}</div>
  );
}

export default User;
