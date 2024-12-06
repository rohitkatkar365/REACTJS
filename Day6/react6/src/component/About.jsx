import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <h1>AboutPage</h1>
    <p>This is about of our awesome app</p>
    <Link to='/'>Go to Home Page</Link>
    </>
  )
}

export default About