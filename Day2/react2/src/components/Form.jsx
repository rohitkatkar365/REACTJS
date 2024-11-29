import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  const [userErr, setUserErr] = useState(false);

  function getFormData(e) {
    e.preventDefault();

    if (name.trim() === "") {
      setUserErr(true);
      return;
    }

    setUserErr(false);
    console.log("Name:", name);
    console.log("Accepted T&C:", tnc);
    console.log("Interest:", interest);
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        {userErr && name.trim() === "" && (
          <p style={{ color: "red" }}>Name is required!</p>
        )}
        <br />
        <br />

        <select defaultValue="" onChange={(e) => setInterest(e.target.value)}>
          <option value="" disabled>
            Select Interest
          </option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
          <option value="Ruby">Ruby</option>
        </select>
        <br />
        <br />

        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)}
        />
        <span> Accept Terms & Conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
