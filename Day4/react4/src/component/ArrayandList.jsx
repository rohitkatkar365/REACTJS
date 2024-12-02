import React from 'react'

function ArrayandList() {
    const arr = ["Ram","Sham","Arjun","Krishna","Luvekesh"]
  return (
    <>
    <h1>Student List</h1>
    <ul>
        {
            arr.map((ele,i)=>{
                return <li key={i}>{ele}</li>
            })
        }
    </ul>
    </>
  )
}

export default ArrayandList