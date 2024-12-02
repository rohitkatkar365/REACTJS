import React from "react";

function Table() {
  const people = [
    {
      name: "John Doe",
      age: 28,
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
    },
    {
      name: "Jane Smith",
      age: 34,
      address: {
        street: "456 Oak St",
        city: "Los Angeles",
        country: "USA",
      },
    },
    {
      name: "Carlos Garcia",
      age: 29,
      address: {
        street: "789 Pine St",
        city: "Madrid",
        country: "Spain",
      },
    },
    {
      name: "Maria Gonzalez",
      age: 40,
      address: {
        street: "101 Maple Ave",
        city: "Mexico City",
        country: "Mexico",
      },
    },
    {
      name: "Samuel Lee",
      age: 25,
      address: {
        street: "202 Birch Rd",
        city: "Seoul",
        country: "South Korea",
      },
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {people.map((ele, i) => (
            <tr key={i}>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>
                {ele.address.street}, {ele.address.city}, {ele.address.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
