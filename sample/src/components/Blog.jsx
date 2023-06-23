import React from 'react'
import { Link, Outlet, } from 'react-router-dom'

function Blog() {
  return (
    <div>
    <div className='blogButtons'>
    
    <Link className='navLink' to="newblog">Newblog</Link>      
    <Link className='navLink' to="oldblog">Oldblog</Link>
    </div>
       <h1>Blog Component</h1>
      <p className='paraHome'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium perferendis soluta sapiente qui amet nesciunt minima? Adipisci, unde accusamus culpa, debitis nam pariatur similique explicabo quae aliquid voluptatem dolorum.</p>
      <Outlet/>
      </div> 
  )
}

export default Blog
