import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <>
    <h1>Contact Page</h1>
    <Link to="company">Company</Link>
    <Link to="channel">Channel</Link>
    <Outlet></Outlet>
    </>
  )
}

export default Contact