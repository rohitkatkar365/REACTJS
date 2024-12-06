import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const navtoigate = (url) =>{
    if (url == '/filter') {
      navigate("/filter");
    } else {
      navigate("/about");
    }
  }
  return (
    <>
    <h1>Homepage</h1>
    <p>This is homepage of our awesome app</p>
    <Link to='/about'>Go to About Page</Link>
    <br />
    <br />
    {/* <button onClick={()=>navigate("/about")}>Go to about Page</button> */}
    <button onClick={()=>navtoigate("/about")}>Go to about Page</button>
    <br />
    <br />
    {/* <button onClick={()=>navigate("/filter")}>Go to filter page</button> */}
    <button onClick={()=>navtoigate("/filter")}>Go to filter page</button>
    </>
  )
}

export default Home