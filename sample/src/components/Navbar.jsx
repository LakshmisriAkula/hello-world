import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navParent'>
      <Link className='navLink' to="home">Home</Link>
      <Link className='navLink' to="address">Address</Link>
      <Link className='navLink'to="contact">Contact</Link>
      <Link className='navLink'to="gallary">Gallary</Link>
      <Link className='navLink'to="blog">Blog</Link>
    </div>
  )
}

export default Navbar
