import React, { useState } from "react";

function Props(props) {
  const { name, age, other } = props;

  const [name1, setName] = useState(name);

  function update() {
    setName("Ram"); 
  }

  return (
    <>
      <h1>My name is {name1}</h1> 
      <h1>My age is {age}</h1>
      <h1>
        <ul>
          <li>{other.city}</li>
          <li>{other.country}</li>
          <li>{other.postalCode}</li>
          <li>{other.state}</li>
          <li>{other.street}</li>
        </ul>
      </h1>
      <button onClick={update}>Update Name</button>
    </>
  );
}

export default Props;
