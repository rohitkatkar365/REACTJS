import React from "react";

function Object() {
  const p = [
    {
      name: "John Doe",
      age: 28,
      profession: "Software Developer",
    },
    {
      name: "Jane Smith",
      age: 34,
      profession: "Graphic Designer",
    },
    {
      name: "Emily Johnson",
      age: 45,
      profession: "Teacher",
    },
    {
      name: "Michael Brown",
      age: 22,
      profession: "Marketing Specialist",
    },
    {
      name: "Sarah Davis",
      age: 30,
      profession: "Data Scientist",
    },
  ];

  return (
    <>
      <table style={{ border: "1px solid black", borderCollapse: "collapse", margin:'5px'}}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Profession</th>
          </tr>
        </thead>
        <tbody>
          {p.map((ele, i) => (
            <tr key={i}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{ele.name}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{ele.age}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{ele.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Object;
